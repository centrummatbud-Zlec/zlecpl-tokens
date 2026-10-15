/**
 * Zlec.pl Design Tokens -- JavaScript / ES6
 * Generated from design-tokens.json (W3C Design Tokens format)
 * Usage: import { tokens } from './tokens.js'
 *        import { spacing, color } from './tokens.js'
 */

export const color = {
  brand: {
    primary: '#E8470A',
    dark: '#C53A08',
    tint: 'rgba(232,71,10,0.12)',
  },
  navy: {
    base: '#1A2B4A',
    mid: '#2D4066',
    light: '#3D5280',
  },
  surface: {
    bg: '#F4F5F8',
    card: '#FFFFFF',
    elevated: '#F0F1F5',
  },
  text: {
    primary: '#1A2B4A',
    secondary: '#64748B',
    tertiary: '#94A3B8',
  },
  border: {
    default: 'rgba(0,0,0,0.08)',
  },
  status: {
    success: '#10B981',
    successTint: 'rgba(16,185,129,0.12)',
    warning: '#F59E0B',
    warningTint: 'rgba(245,158,11,0.12)',
    error: '#EF4444',
    errorTint: 'rgba(239,68,68,0.12)',
    info: '#8B5CF6',
    infoTint: 'rgba(139,92,246,0.12)',
  },
};

export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  full: '999px',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
};

export const typography = {
  family: {
    base: "'Plus Jakarta Sans', system-ui, sans-serif",
  },
  size: {
    xs: '11px',
    sm: '13px',
    base: '15px',
    lg: '17px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.7,
  },
};

export const shadow = {
  sm: '0 1px 3px rgba(0,0,0,0.08)',
  md: '0 4px 12px rgba(0,0,0,0.12)',
  lg: '0 8px 24px rgba(0,0,0,0.18)',
};

/** Convenience: all tokens in one object */
export const tokens = { color, radius, spacing, typography, shadow };

export default tokens;
