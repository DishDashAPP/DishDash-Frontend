import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import '@styles/tailwind.css'
import classJoin from '@utils/classJoin'
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  interactiveWidget: 'resizes-content',
}

export const metadata: Metadata = {
  title: 'DishDash',
  description: 'DishDash',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fa"
    >
      <body dir="rtl">
      {children}
      </body>
    </html>
  )
}
