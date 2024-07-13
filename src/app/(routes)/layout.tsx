import {ReactNode} from 'react'
import type {Metadata, Viewport} from 'next'
import localFont from 'next/font/local'
// import Toast from '@components/Toast/Toast'
// import ClientWrapper from '@modules/ClientWrapper/ClientWrapper'
import '@styles/tailwind.css'
import '@assets/FontIcon/style.css'
import classJoin from '@utils/classJoin'

const danaFont = localFont({
    src: '../_assets/DanaVF.woff2',
    display: 'swap',
    variable: '--font-dana',
})

const fontIcon = localFont({
    src: '../_assets/FontIcon/fonts/fontIcon.woff',
    display: 'swap',
    variable: '--font-icon',
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    interactiveWidget: 'resizes-content',
}

export const metadata: Metadata = {
    title: 'اتو ابزار',
    description: 'اتو ابزار',
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

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html
            lang="fa"
            className={classJoin([danaFont.variable, fontIcon.variable])}
        >
        <body dir="rtl" className="text-sm text-gray-primary">
        {children}
        </body>
        </html>
    )
}
