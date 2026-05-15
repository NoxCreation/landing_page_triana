"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import system from "./theme";
import { AppProgressProvider as ProgressProvider } from '@bprogress/next';

export function Provider(props: ColorModeProviderProps) {
  return (
    <ProgressProvider
      height="4px"
      color="#780f7f"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <ChakraProvider value={system}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </ProgressProvider>
  );
}