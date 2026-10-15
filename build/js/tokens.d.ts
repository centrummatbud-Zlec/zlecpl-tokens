/**
 * Zlec.pl Design Tokens -- TypeScript declarations
 * Generated from design-tokens.json
 */

export declare const color: {
  brand: { primary: string; dark: string; tint: string };
  navy: { base: string; mid: string; light: string };
  surface: { bg: string; card: string; elevated: string };
  text: { primary: string; secondary: string; tertiary: string };
  border: { default: string };
  status: {
    success: string; successTint: string;
    warning: string; warningTint: string;
    error: string;   errorTint: string;
    info: string;    infoTint: string;
  };
};

export declare const radius: {
  sm: string; md: string; lg: string; xl: string; full: string;
};

export declare const spacing: {
  xs: string; sm: string; md: string; lg: string; xl: string; '2xl': string;
};

export declare const typography: {
  family: { base: string };
  size: { xs: string; sm: string; base: string; lg: string; xl: string; '2xl': string; '3xl': string };
  weight: { regular: number; medium: number; semibold: number; bold: number };
  lineHeight: { tight: number; normal: number; loose: number };
};

export declare const shadow: {
  sm: string; md: string; lg: string;
};

export declare const tokens: {
  color: typeof color;
  radius: typeof radius;
  spacing: typeof spacing;
  typography: typeof typography;
  shadow: typeof shadow;
};

export default tokens;
