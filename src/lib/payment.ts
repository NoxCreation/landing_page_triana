import { queryDb2 } from "./db2";

export const registerLead = async (
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    country_code: string
): Promise<string | undefined> => {
    const query = `
        INSERT INTO public.leads (id, first_name, last_name, email, phone, country_code, "createdAt", "updatedAt")
        VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, NOW(), NOW())
        ON CONFLICT (phone) DO UPDATE SET
            first_name = EXCLUDED.first_name,
            last_name = EXCLUDED.last_name,
            email = EXCLUDED.email,
            country_code = EXCLUDED.country_code,
            "updatedAt" = NOW()
        RETURNING id
    `;
    try {
        const result = await queryDb2(query, [first_name, last_name, email, phone, country_code]);
        const uuid = result[0]?.id;
        return typeof uuid === 'string' ? uuid : undefined;
    } catch (err) {
        console.error("Error en registerLead:", err);
        return undefined;
    }
}

/**
 * Crea un pago (si no existe por paymentId) y agrega un registro en el historial.
 * Si paymentId es undefined, se crea un nuevo Payment.
 * Si paymentId es un string, se usa como ID del Payment existente (solo se agrega historial).
 *
 * @param leadId - UUID del lead (relación Lead)
 * @param paymentId - Opcional. UUID del pago existente (si se provee) o undefined para crear nuevo.
 * @param amount - Monto del pago (decimal)
 * @param status - Estado del pago: 'pending' | 'completed' | 'dispute' | 'refunded' | 'failed'
 * @param description - Descripción del evento en el historial
 * @returns { paymentId: string, historyId: string } | undefined - UUIDs internos del pago y del historial creado
 */
export const createPaymentWithHistory = async (
    leadId: string,
    paymentId: string | undefined,
    amount: number,
    status: "pending" | "completed" | "dispute" | "refunded" | "failed",
    description: string
): Promise<{ paymentId: string; historyId: string } | undefined> => {
    try {
        let finalPaymentId: string;

        if (!paymentId) {
            // Caso 1: Crear un nuevo pago
            const insertPaymentQuery = `
                INSERT INTO public.payments (id, "leadId", amount, "createdAt", "updatedAt")
                VALUES (gen_random_uuid(), $1::uuid, $2, NOW(), NOW())
                RETURNING id
            `;
            const paymentResult = await queryDb2(insertPaymentQuery, [leadId, amount]);
            if (!paymentResult || !paymentResult[0]?.id) {
                throw new Error("No se pudo crear el pago");
            }
            finalPaymentId = paymentResult[0].id;
        } else {
            // Caso 2: Usar el ID de pago existente (se asume que ya existe en la BD)
            finalPaymentId = paymentId;
            // Opcional: verificar que realmente exista
            const checkQuery = `SELECT 1 FROM public.payments WHERE id = $1::uuid`;
            const checkResult = await queryDb2(checkQuery, [finalPaymentId]);
            if (!checkResult || checkResult.length === 0) {
                throw new Error(`El pago con id ${finalPaymentId} no existe`);
            }
        }

        // Insertar el registro en el historial de pagos
        const insertHistoryQuery = `
            INSERT INTO public.payments_history (id, status, description, "paymentId", "createdAt", "updatedAt")
            VALUES (gen_random_uuid(), $1, $2, $3::uuid, NOW(), NOW())
            RETURNING id
        `;
        const historyResult = await queryDb2(insertHistoryQuery, [status, description, finalPaymentId]);
        if (!historyResult || !historyResult[0]?.id) {
            throw new Error("No se pudo crear el historial del pago");
        }

        return {
            paymentId: finalPaymentId,
            historyId: historyResult[0].id,
        };
    } catch (err) {
        console.error("Error en createPaymentWithHistory:", err);
        return undefined;
    }
};

export const getMessageRefund = (decline_code: string, last_payment_code: string) => {
    switch (decline_code) {
        case "insufficient_funds":
            return `❌ Pago fallido por fondos insuficientes`;
        case "generic_decline":
            return `❌ Pago fallido por rechazo genérico`;
        case "lost_card":
            return `❌ Pago fallido por tarjeta perdida`;
        case "stolen_card":
            return `❌ Pago fallido por tarjeta robada`;
        case "fraudulent":
            return `❌ Pago fallido por fraude`
        case "card_velocity_exceeded":
            return `❌ Pago fallido por exceso de velocidad de tarjeta`;
        default:
            switch (last_payment_code) {
                case "payment_intent_authentication_failure":
                    return `❌ Pago fallido por fallo de autenticación`;
                case "expired_card":
                    return `❌ Pago fallido por tarjeta expirada`;
                case "incorrect_cvc":
                    return `❌ Pago fallido por CVC incorrecto`;
                case "processing_error":
                    return `❌ Pago fallido por error de procesamiento`;
                case "incorrect_number":
                    return `❌ Pago fallido por número de tarjeta incorrecto`;
                default:
                    return `❌ Pago fallido causa desconocida`;
            }
    }
}
