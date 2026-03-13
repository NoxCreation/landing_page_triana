"use client";

import { useState } from "react";
import { Box, Flex, HStack, Link, Image, IconButton, Button } from "@chakra-ui/react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = ["Servicios", "Proceso", "Sobre mí", "Testimonios", "Blog"];

  return (
    <>
      <Box as="header" maxWidth="1440px" bg="secondary.500/10" boxShadow="0px 0px 24px rgba(97,17,97,0.24)" position="sticky" top={0} zIndex={10}>
        <Flex alignItems="center" h={"80px"}  justify="space-between" mx="auto" px={{ base: "24px", lg: "160px" }}>
          <Image src="/home/LOGO_PRINCIPAL.svg" alt="Logo" width={"96px"} height={"48px"} objectFit="contain" />
          <HStack as="nav" gap={"24px"} w={"472px"} display={{ base: "none", md: "flex" }}>
            {items.map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(/\s+/g, '-')}`}
                fontWeight="600"
                fontFamily="Roboto"
                fontSize="18px"
                lineHeight="22px"
                letterSpacing="0"
                color="primary.500"
              >
                {label}
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

      {mobileOpen && (
        <Box position="fixed" top={0} left={0} w="100%" bg="white" zIndex={20} p={4} display={{ base: "block", md: "none" }}>
          <Flex justify="flex-end">
            <Button size="sm" onClick={() => setMobileOpen(false)}>Cerrar</Button>
          </Flex>
          <Box mt={2}>
            {items.map((label) => (
              <Box key={label} mb={2}>
                <Link href={`/${label.toLowerCase().replace(/\s+/g, '-')}`} fontWeight="semibold" color="gray.700">
                  {label}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}
