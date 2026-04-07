import { getMetadata } from "@/lib/getMetadata";
import ProcessIndex from "@/modules/process";

export async function generateMetadata() {
    return getMetadata({
      title: "Proceso - Triana Marketing",
      description: "Conoce nuestro proceso de trabajo: desde el diagnóstico inicial hasta la implementación de estrategias de marketing efectivas.",
      keywords: [
        "proceso de trabajo",
        "metodología",
        "estrategia de marketing",
        "consultoría",
      ]
    })
}

export default function Process() {
    return (
        <ProcessIndex/>
    )
}