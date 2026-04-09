import { getContent } from "./content"
import { queryDb2 } from "./db2"
import { generateID } from "./generateID"

export const registerComment = async (
    name: string,
    position: string,
    comment: string
) => {
    const content = await getContent()
    content.testimonies.testimonies.push({
        id: generateID(),
        publish: false,
        name,
        position,
        comment
    })

    const query = `
        UPDATE landing
        SET content = $1::json,
            "updatedAt" = NOW()
        WHERE id = (SELECT id FROM landing LIMIT 1);
    `;
    try {
        const result = await queryDb2(query, [content]);
        return result;
    } catch (err) {
        console.error("Error en registerComment:", err);
        return undefined;
    }
}