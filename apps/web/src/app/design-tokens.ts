/** Add this to tailwind.config.ts under theme.extend, after scaffolding apps/web */
export const designTokens = {
  colors: {
    rose: {
      DEFAULT: "#D6336C",
      light: "#FDEEF2",
      dark: "#A61E4D",
    },
    skyTint: "#EAF4FB",
    ink: "#2B2130",
    muted: "#7A6B72",
    borderSoft: "#F1E4E8",
  },
  fontFamily: {
    heading: ["var(--font-heading)"],
    body: ["var(--font-body)"],
    accent: ["var(--font-accent)"],
  },
};
