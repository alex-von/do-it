import { Footer } from '@/components/footer'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Nav from '@/components/nav'
import { getCurrentUser } from '@/lib/session'
import { User } from '@/lib/types'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Do It',
  description: 'A todo app built with Next.js and Tailwind CSS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser() as User
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main className='flex flex-col min-h-screen bg-background mx-auto items-center justify-center'>
            <Nav user={user} />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
