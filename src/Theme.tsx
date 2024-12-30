import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";

export interface Theme {
  colors: {
    purpleLight: string;
    purpleBase: string;
    purpleDark: string;
    greenLight: string;
    greenBase: string;
    greenDark: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    danger: string;
  };
  fonts: {
    regular: string;
    semibold: string;
    bold: string;
  };
  fontSizes: {
    sm: number;
    md: number;
    lg: number;
  };
  space: {
    14: number;
    33: number;
  };
}

const theme: Theme = {
  colors: {
    purpleLight: "#DDD2EF",
    purpleBase: "#9359F3",
    purpleDark: "#6F3CC3",
    greenLight: "#BFE3D0",
    greenBase: "#479C6E",
    greenDark: "#2D6C4A",
    gray100: "#F0EDF2",
    gray200: "#E5E2E9",
    gray300: "#E0DCE4",
    gray400: "#D1CBD7",
    gray500: "#6B6572",
    gray600: "#262428",
    danger: "#C2464D",
  },
  fonts: {
    regular: 'Inter_400Regular',
    semibold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
  fontSizes: {
    sm: 12,
    md: 14,
    lg: 16,
  },
  space: {
    14: 56,
    33: 148,
  },
};

type ThemeProps = {
  children: ReactNode;
};

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
