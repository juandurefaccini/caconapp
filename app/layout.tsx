import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CaconAPP',
  description: 'Generado con Next.js, porque me encanta complicarme la vida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="theme-color" content="#000000" />

      {/* make sure to provide the name of your icon in below.*/}
      <link rel="apple-touch-icon" href="/icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
