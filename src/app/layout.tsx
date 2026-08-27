import { Box, Hanzo } from '@hanzo/ui'
import React, { type PropsWithChildren } from 'react'
import type { Viewport, Metadata } from 'next'

// The Hanzo theme, and the atomic rules gui compiles its style props against.
// styles.css is named here because a bundler that will not follow a CSS import
// out of node_modules drops the one <Hanzo> makes itself.
import '@hanzo/ui/theme.css'
import '@hanzo/ui/styles.css'
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
    <html lang="en" className="dark">
      <body>
        {/* gui needs its config in context before anything mounts. */}
        <Hanzo theme="dark">
          {/* No `grow`: body is a grid with one 1fr row, so the fill is stated
              by the TRACK rather than asked for by the child. */}
          <Box tag="main">{children}</Box>
        </Hanzo>
      </body>
    </html>
  )
}
