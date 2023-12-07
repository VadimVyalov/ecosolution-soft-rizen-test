import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next'
import { Oswald, Fira_Sans } from "next/font/google";

import './globals.css'


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: 'swap', variable: '--font-oswald', })
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: 'swap', variable: '--font-firaSans', })

export const metadata: Metadata = {
  title: 'Ecosolution',
  description: 'energy',

  metadataBase: new URL('https://ecosolution-alpha.vercel.app/'),
  openGraph: {
    title: 'Renewable energy for any task',
    description: 'Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass',
    url: 'https://ecosolution-alpha.vercel.app/',
    siteName: 'Ecosolution',
    images: [
      {
        url: 'https://ecosolution-alpha.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: 'RENEWABLE ENERGY',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${firaSans.variable} `}>
        {/* <body> */}

        <Header />
        {children}

        <Footer />
        {/* <div id="modal-root"></div> */}
      </body>
    </html>
  )
}
