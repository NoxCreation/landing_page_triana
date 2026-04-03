"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Flex, HStack, Image, IconButton, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const items = [
    { url: "/", label: "Inicio" },
    { url: "/service", label: "Servicios" },
    /* { url: "/process", label: "Proceso" }, */
    { url: "/my", label: "Sobre mí" },
    { url: "/testimonies", label: "Testimonios" },
    { url: "/contact", label: "Contacto" },
    { url: "/blog", label: "Blog" },
  ];

  // Efecto para detectar scroll y cambiar estilo de la barra
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Cerrar menú con tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
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
        bg={isScrolled ? "#fceeffde" : "transparent"}
        boxShadow={isScrolled ? "0px 0px 24px rgba(97,17,97,0.24)" : "none"}
        transition="background-color 0.3s ease, box-shadow 0.3s ease"
      >
        <Flex
          alignItems="center"
          h="80px"
          w="100%"
          justify="space-between"
          mx="auto"
          px={{ base: "24px", lg: "160px" }}
        >
          <Box flex={1}>
            <Link href="/">
              <Image
                src="/home/LOGO_PRINCIPAL.svg"
                alt="Logo"
                width="96px"
                height="48px"
                objectFit="contain"
              />
            </Link>
          </Box>

          {/* Menú desktop */}
          <HStack as="nav" gap="24px" display={{ base: "none", md: "flex" }}>
            {items.map((item) => (
              <Link key={item.label} href={item.url}>
                <Text
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

          {/* Botón hamburguesa */}
          <IconButton
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
            display={{ base: "flex", md: "none" }}
            variant="ghost"
          >
            <span>☰</span>
          </IconButton>
        </Flex>
      </Box>

      {/* Menú móvil con animaciones */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 19,
              }}
              onClick={closeMobileMenu}
            />

            {/* Panel del menú */}
            <motion.div
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "100%",
                height: "100vh",
                background: "white",
                zIndex: 200,
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Flex justify="flex-end">
                <Button
                  size="sm"
                  onClick={closeMobileMenu}
                  aria-label="Cerrar menú"
                >
                  <FiX />
                </Button>
              </Flex>

              <Box mt={2} flex="1" px={10} zIndex={200}>
                {items.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={closeMobileMenu}
                  >
                    <Link href={item.url}>
                      <Text
                        fontSize="25px"
                        fontWeight={isActive(item.url) ? "bold" : "semibold"}
                        color={isActive(item.url) ? "primary.500" : "gray.700"}
                        display="block"
                        py={2}
                        _hover={{ color: "primary.400" }}
                      >
                        {item.label}
                      </Text>
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}