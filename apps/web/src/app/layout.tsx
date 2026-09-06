import type { Metadata } from 'next';
import { Poppins, Inter, Caveat } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets:['latin'], weight:['500','600','700'], variable:'--font-heading' });
const inter = Inter({ subsets:['latin'], weight:['400','500','600'], variable:'--font-body' });
const caveat = Caveat({ subsets:['latin'], weight:['600'], variable:'--font-accent' });
export const metadata: Metadata = { title:'Giftly — Beautiful gifts for every moment', description:'Premium gifting, Indian wedding collections, hampers and personalised gifts.' };
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="en"><body className={`${poppins.variable} ${inter.variable} ${caveat.variable}`}>{children}</body></html> }
