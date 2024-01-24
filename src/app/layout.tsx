import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const defaultTitle = "YARG | Yet Another Rhythm Game";
const description = "YARG (a.k.a. Yet Another Rhythm Game) is a free, open-source, plastic guitar game that is still in development. It supports guitar (five fret), drums (plastic or e-kit), vocals, pro-guitar, and more!";
const twitterAccount = "@YARGGame";

export const metadata: Metadata = {
  metadataBase: new URL('https://yarg.in'),

  title: {
    template: '%s | Yet Another Rhythm Game',
    absolute: defaultTitle
  },
  
  description: description,
  keywords: ["YARG", "Yet Another Rhythm Game", "Rock Band", "Guitar Hero", "Clone Hero"],
  creator: twitterAccount,

  openGraph: {
    locale: "en-US",
    type: "website",
    title: defaultTitle,
    siteName: defaultTitle,
    description: description,
    url: "https://yarg.in",
    images: "/opengraph-image.png",
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle, 
    description: description,
    site: "https://yarg.in",
    creator: twitterAccount,
    images: "/twitter-banner.png",
  }
}

export const viewport: Viewport = {
  themeColor: '#080b13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
