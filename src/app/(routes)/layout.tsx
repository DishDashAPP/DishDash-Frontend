import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import '@styles/tailwind.css'
import classJoin from '@utils/classJoin'

const danaFont = localFont({
    src: '../_assets/DanaVF.woff2',
    display: 'swap',
    variable: '--font-dana',
})

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
        <html lang="fa" className={classJoin([danaFont.variable])}>
            <body dir="rtl" className="text-sm text-gray-primary">
                {children}
            </body>
        </html>
    )
}
