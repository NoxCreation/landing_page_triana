'use client'
import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { WhatsApp, ArrowUpward } from '@mui/icons-material';

export default function ButtonUp() {
    const [isTop, setIsTop] = useState(true)
    useEffect(() => {
        window.onscroll = function (ev) {
            window.onscroll = function (ev) {
                if (window.scrollY == 0)
                    setIsTop(true)
                else
                    setIsTop(false)
            };
        }
    })

    return (
        <>
            <Box
                position={'fixed'}
                bottom={0}
                right={0}
                mr={'5%'}
                mb={20}
                zIndex={80}
            >
                <Link target="_blank" href={`https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_PHONE_CONTACT}&text=Hola+estoy+interesado+en+sus+servicios.&type=phone_number&app_absent=0`}>
                    <Button
                        color={'white'}
                        bg={'green.500'}
                        className="div-saltando"
                        boxShadow={'0 0 70px #23964c'}
                        borderRadius={'50%'}
                        h={'50px !important'}
                        w={'50px !important'}
                        variant={'solid'}
                        fontSize={'18px'}
                        p={0}
                    >
                        {/* <Image src="/images/icon_whatsapp.svg" alt="Whatsapp" /> */}
                        <WhatsApp />
                    </Button>
                </Link>
            </Box>
            <Box
                data-state={!isTop ? "open" : "closed"}
                _open={{
                    animation: "fade-in 300ms ease-out",
                    opacity: 1
                }}
                _closed={{
                    animation: "fadeOut 300ms ease-in",
                    opacity: 0
                }}
            >
                <Flex>

                    <Box
                        position={'fixed'}
                        bottom={0}
                        right={0}
                        mr={'5%'}
                        mb={40}
                        zIndex={80}
                    >
                        <Button
                            color={'white'}
                            bg={"#B223CF"}
                            boxShadow={'0 0 70px #B223CF'} borderRadius={'50%'} h={'50px !important'} w={'50px !important'} variant={'subtle'} fontSize={'18px'}
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <ArrowUpward />
                            {/* <Image src="/images/arrow_up.svg" alt="Arrow Up" /> */}
                        </Button>
                    </Box>
                </Flex>

            </Box>
        </>

    )
}


{/* <Fade in={!true}>
                <Box
                    position={'fixed'}
                    bottom={0}
                    right={0}
                    mr={'5%'}
                    mb={20}
                    zIndex={80}
                >
                    <Button borderRadius={'50%'} h={'50px'} w={'50px'} color='#""2E2E2E' fontSize={'18px'}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'smooth'
                            });
                        }}
                    >
                        <Image src="/arrow_up.svg" />
                    </Button>
                </Box>
            </Fade>  */}