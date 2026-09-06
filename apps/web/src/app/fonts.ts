import { Poppins, Inter, Caveat } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-accent",
});

// Usage in app/layout.tsx:
// <body className={`${poppins.variable} ${inter.variable} ${caveat.variable} font-body`}>
