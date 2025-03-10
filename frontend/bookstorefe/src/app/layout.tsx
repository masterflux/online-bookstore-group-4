// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Bookstore',
  description: 'A simple bookstore built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-3xl font-bold">Bookstore</h1>
        </header>
        {children}
      </body>
    </html>
  )
}
