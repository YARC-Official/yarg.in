import { Inter, Red_Hat_Display } from 'next/font/google';

export const inter = Inter({ 
    subsets: ['latin'],
});

export const redHatDisplay = Red_Hat_Display({ 
    weight: ["900"], 
    subsets: ['latin'],
    variable: "--font-red-hat-display",
});