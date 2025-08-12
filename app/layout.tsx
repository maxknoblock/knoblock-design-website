import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KNOBLOCK - Project Ideas',
  description: 'A collection of innovative project ideas for collaboration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-dark-bg via-darker-red via-dark-red to-darker-bg">
          {children}
        </div>
      </body>
    </html>
  )
}
