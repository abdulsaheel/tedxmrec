import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TEDxMREC - Seeds of Social Chain',
  description: 'TEDxMREC: Uniting Ideas for Change',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

