import { Box } from "@chakra-ui/react";

export const HtmlRenderer = ({ children }) => {
    return (
        <Box
            css={{
                // Alineación a la izquierda (flotante)
                '& .image-style-align-left': {
                    float: 'left',
                    marginRight: '1.5em',
                    marginBottom: '0.5em',
                    maxWidth: '50%',
                },
                // Alineación a la derecha (flotante)
                '& .image-style-side, & .image-style-align-right': {
                    float: 'right',
                    marginLeft: '1.5em',
                    marginBottom: '0.5em',
                },
                // Centrado (importante!)
                '& .image-style-align-center': {
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center',
                    clear: 'both',
                },
                // Asegura que la figura no sea inline-block (interfiere con margin auto)
                '& .image-style-align-center.image': {
                    display: 'block',
                },
                // Reglas generales para cualquier imagen
                '& .image': {
                    position: 'relative',
                    display: 'inline-block',
                },
                '& .image img': {
                    maxWidth: '100%',
                    height: 'auto',
                },
                // Limpiar floats después del contenido
                '&::after': {
                    content: '""',
                    display: 'table',
                    clear: 'both',
                }
            }}
            dangerouslySetInnerHTML={{ __html: children }}
        />
    );
};

export default HtmlRenderer;