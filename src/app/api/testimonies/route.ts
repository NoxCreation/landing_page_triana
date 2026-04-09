import { registerComment } from "@/lib/registerComment";

export async function POST(req: Request) {

    try {
        const {
            name,
            position,
            comment
        } = await req.json();

        if(!name || !position || !comment) {
            return new Response("Faltan campos requeridos", { status: 400 });
        }

        await registerComment(name, position, comment)

        return Response.json({});
    } catch (error) {
        console.error("Stripe error:", error);
        return new Response(`Error creating session: ${error}`, { status: 500 });
    }
}