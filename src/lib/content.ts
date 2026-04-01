import { ContentType } from "@/types/ContentType";
import { queryDb2 } from "./db2";

export const getContent = async (): Promise<ContentType> => {
    const query = `SELECT * FROM public.landing`;
    try {
        const result = await queryDb2(query, []);
        if (result.length > 0) {
            return result[0].content
        }
    } catch (err) {
        return undefined
    }
}