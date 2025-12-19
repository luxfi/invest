import React, { type PropsWithChildren } from 'react'
import type { Viewport, Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Lux Invest | Investment Portal',
  description: 'Invest in the Lux Network ecosystem. Access DeFi protocols, staking opportunities, and blockchain investments.',
  keywords: ['Lux', 'Investment', 'DeFi', 'Blockchain', 'Staking', 'Crypto'],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className='dark'>
      <body className='bg-black text-white flex flex-col min-h-full'>
        <main className='flex flex-col grow'>
          {children}
        </main>
      </body>
    </html>
  )
}
