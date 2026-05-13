import { Box } from "@chakra-ui/react";

export const HtmlRenderer = ({ children }) => {
    return (
        <Box
            css={{
                // Estilos para escritorio (por defecto)
                '& .image-style-align-left': {
                    float: 'left',
                    marginRight: '1.5em',
                    marginBottom: '0.5em',
                    maxWidth: '50%',
                },
                '& .image-style-side, & .image-style-align-right': {
                    float: 'right',
                    marginLeft: '1.5em',
                    marginBottom: '0.5em',
                },
                '& .image-style-align-center': {
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center',
                    clear: 'both',
                },
                '& .image-style-align-center.image': {
                    display: 'block',
                },
                '& .image': {
                    position: 'relative',
                    display: 'inline-block',
                },
                '& .image img': {
                    maxWidth: '100%',
                    height: 'auto',
                },
                '&::after': {
                    content: '""',
                    display: 'table',
                    clear: 'both',
                },

                // 📱 Estilos para móviles (pantallas de hasta 768px)
                '@media (max-width: 768px)': {
                    '& .image, & .image-style-align-left, & .image-style-side, & .image-style-align-right, & .image-style-align-center': {
                        float: 'none',              // Eliminar flotación
                        marginLeft: '0',
                        marginRight: '0',
                        maxWidth: '100%',           // Ocupa todo el ancho
                        width: '100% !important',
                        display: 'block',
                        textAlign: 'center',
                    },
                    '& .image img': {
                        width: '100%',              // La imagen ocupa el 100% del contenedor
                        maxWidth: '100%',
                        height: 'auto',
                    },
                    '& .image-style-align-center, & .image-style-align-center.image': {
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    },
                },
            }}
            dangerouslySetInnerHTML={{ __html: children }}
        />
    );
};

export default HtmlRenderer;