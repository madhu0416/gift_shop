import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {
    colors: { rose: { DEFAULT: '#D6336C', light: '#FDEEF2', dark: '#A61E4D' }, skyTint: '#EAF4FB', ink: '#2B2130', muted: '#7A6B72', borderSoft: '#F1E4E8', cream: '#FFF8F0' },
    fontFamily: { heading: ['var(--font-heading)'], body: ['var(--font-body)'], accent: ['var(--font-accent)'] },
    boxShadow: { soft: '0 8px 30px rgba(43,33,48,.08)', card: '0 4px 18px rgba(43,33,48,.06)' }
  }}, plugins: []
};
export default config;
