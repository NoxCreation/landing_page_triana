"use client";

import { useState } from "react";
import { Box, Flex, HStack, Link, Image, IconButton, Button } from "@chakra-ui/react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = ["Servicios", "Proceso", "Sobre mí", "Testimonios", "Blog"];

  return (
    <>
      <Box as="header" w="100%" bg="#FDF0FE" boxShadow="sm" position="sticky" top={0} zIndex={10}>
        <Flex h={16} alignItems="center" justify="space-between" maxW="1200px" mx="auto" px={6}>
          <Image src="/window.svg" alt="Logo" boxSize="40px" objectFit="contain" />
          <HStack as="nav" gap={8} display={{ base: "none", md: "flex" }}>
            {items.map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(/\s+/g, '-')}`}
                fontWeight="semibold"
                color="brand.500"
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
