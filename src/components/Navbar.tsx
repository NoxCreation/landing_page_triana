"use client";

import { useState, useEffect } from "react";
import { Box, Flex, HStack, Image, IconButton, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const items = [
    { url: "/", label: "Inicio" },
    { url: "/service", label: "Servicios" },
    { url: "/process", label: "Proceso" },
    { url: "/my", label: "Sobre mí" },
    { url: "/testimonies", label: "Testimonios" },
    { url: "/blog", label: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Comprobar si el scroll vertical es mayor que 0
      setIsScrolled(window.scrollY > 0);
    };

    // Ejecutar al montar para establecer estado inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname === url;
  };

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        w="100%"
        zIndex={10}
        bg={isScrolled ? "#fceeff" : "transparent"}
        boxShadow={isScrolled ? "0px 0px 24px rgba(97,17,97,0.24)" : "none"}
        transition="background-color 0.3s ease, box-shadow 0.3s ease"
      >
        <Flex alignItems="center" h="80px" w="100%" justify="space-between" mx="auto" px={{ base: "24px", lg: "160px" }}>
          <Box flex={1}>
            <Link href="/">
              <Image src="/home/LOGO_PRINCIPAL.svg" alt="Logo" width="96px" height="48px" objectFit="contain" />
            </Link>
          </Box>

          {/* Menú desktop */}
          <HStack as="nav" gap="24px" display={{ base: "none", md: "flex" }}>
            {items.map((item) => (
              <Link key={item.label} href={item.url} passHref legacyBehavior>
                <Text
                  as="a"
                  fontWeight="600"
                  fontFamily="Roboto"
                  fontSize="14px"
                  lineHeight="22px"
                  letterSpacing="0"
                  color={isActive(item.url) ? "primary.500" : "gray.700"}
                  borderBottom={isActive(item.url) ? "2px solid" : "none"}
                  borderColor="primary.500"
                  _hover={{ color: "primary.400", textDecoration: "none" }}
                  cursor="pointer"
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </HStack>

          <IconButton
            aria-label="Abrir menú"
            size="sm"
            onClick={() => setMobileOpen((s) => !s)}
            display={{ base: "flex", md: "none" }}
            variant="ghost"
          >
            <span>☰</span>
          </IconButton>
        </Flex>
      </Box>

      {/* Menú móvil */}
      {mobileOpen && (
        <Box position="fixed" top={0} left={0} w="100%" bg="white" zIndex={20} p={4} display={{ base: "block", md: "none" }}>
          <Flex justify="flex-end">
            <Button size="sm" onClick={closeMobileMenu}>Cerrar</Button>
          </Flex>
          <Box mt={2}>
            {items.map((item) => (
              <Box key={item.label} mb={2} onClick={closeMobileMenu}>
                <Link href={item.url} passHref legacyBehavior>
                  <Text
                    as="a"
                    fontWeight={isActive(item.url) ? "bold" : "semibold"}
                    color={isActive(item.url) ? "primary.500" : "gray.700"}
                    display="block"
                    py={1}
                  >
                    {item.label}
                  </Text>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}