import Header from '@/components/Header';
import type { Metadata } from 'next'
import { Oswald, Fira_Sans } from "next/font/google";

import './globals.css'




const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: 'swap', variable: '--font-oswald', })
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: 'swap', variable: '--font-firaSans', })

export const metadata: Metadata = {
  title: 'Ecosolution',
  description: 'energy',

  robots: {
    index: false,
    follow: false,
    nocache: true
  }
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

        {/* <Footer /> */}
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
