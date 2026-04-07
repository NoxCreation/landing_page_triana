export type PaymentViewDataType = {
    sessionId: string;
    customerName: string;
    customerEmail: string;
    amountTotal: number;
    currency: string;
    paymentStatus: string;
    lineItems: Array<{
        description: string | null;
        quantity: number | null;
        amountTotal: number;
        currency: string;
    }>;
};