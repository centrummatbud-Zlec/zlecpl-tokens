// Wygenerowane przez scripts/build.js — nie edytować ręcznie
// Zlec.pl Design Tokens v1.0.0

export const color = {
  "brand": {
    "primary": "#E8470A",
    "dark": "#C53A08",
    "tint": "rgba(232,71,10,0.12)"
  },
  "navy": {
    "base": "#1A2B4A",
    "mid": "#2D4066",
    "light": "#3D5280"
  },
  "surface": {
    "bg": "#F4F5F8",
    "card": "#FFFFFF",
    "elevated": "#F0F1F5"
  },
  "text": {
    "primary": "#1A2B4A",
    "secondary": "#64748B",
    "tertiary": "#94A3B8"
  },
  "border": {
    "default": "rgba(0,0,0,0.08)"
  },
  "status": {
    "error": "#EF4444",
    "error-tint": "rgba(239,68,68,0.12)",
    "warning": "#F59E0B",
    "warning-tint": "rgba(245,158,11,0.12)",
    "success": "#10B981",
    "success-tint": "rgba(16,185,129,0.12)",
    "info": "#8B5CF6",
    "info-tint": "rgba(139,92,246,0.12)"
  }
};

export const radius = {
  "sm": "8px",
  "md": "12px",
  "lg": "16px",
  "xl": "20px",
  "full": "999px"
};

export const spacing = {
  "xs": "4px",
  "sm": "8px",
  "md": "12px",
  "lg": "16px",
  "xl": "24px",
  "2xl": "32px"
};

export const typography = {
  "family": {
    "base": "Plus Jakarta Sans, system-ui, sans-serif"
  },
  "size": {
    "xs": "11px",
    "sm": "13px",
    "base": "15px",
    "lg": "17px",
    "xl": "20px",
    "2xl": "24px",
    "3xl": "30px"
  },
  "lineHeight": {
    "tight": "1.2",
    "normal": "1.5",
    "loose": "1.7"
  },
  "letterSpacing": {
    "tight": "-0.02em",
    "normal": "0em",
    "wide": "0.02em",
    "wider": "0.05em"
  },
  "weight": {
    "regular": "400",
    "medium": "500",
    "semibold": "600",
    "bold": "700"
  }
};

export const shadow = {
  "sm": "0 1px 3px rgba(0,0,0,0.08)",
  "md": "0 4px 12px rgba(0,0,0,0.12)",
  "lg": "0 8px 24px rgba(0,0,0,0.18)"
};

export const breakpoint = {
  "xs": "375px",
  "sm": "480px",
  "md": "768px",
  "lg": "1024px",
  "xl": "1280px",
  "2xl": "1440px"
};

export const animation = {
  "duration": {
    "instant": "80ms",
    "fast": "150ms",
    "normal": "250ms",
    "slow": "400ms",
    "slower": "600ms"
  },
  "easing": {
    "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
    "decelerate": "cubic-bezier(0, 0, 0.2, 1)",
    "accelerate": "cubic-bezier(0.4, 0, 1, 1)",
    "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
};

export const zIndex = {
  "base": "0",
  "raised": "1",
  "dropdown": "100",
  "sticky": "200",
  "overlay": "300",
  "modal": "400",
  "toast": "500",
  "tooltip": "600"
};

export const darkTokens = {
  "surface": {
    "bg": "#0F1720",
    "card": "#1A2535",
    "elevated": "#222F42"
  },
  "text": {
    "primary": "#E8EDF5",
    "secondary": "#8BA3C0",
    "tertiary": "#4A6280"
  },
  "border": {
    "default": "rgba(255,255,255,0.08)"
  },
  "navy": {
    "base": "#0D1829",
    "mid": "#1A2B4A",
    "light": "#2D4066"
  }
};

/** Wszystkie tokeny w jednym obiekcie */
export const tokens = {
  color,
  radius,
  spacing,
  typography,
  shadow,
  breakpoint,
  animation,
  zIndex,
  dark: darkTokens,
};

export default tokens;
