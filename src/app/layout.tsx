import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Nino Mercado',
  description: 'Portfolio of Nino Mercado - Software & AI Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans text-xl bg-brutal-cream text-black min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full flex-grow flex flex-col justify-start items-center">
          <div className="w-full max-w-7xl py-12 px-6 sm:px-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
