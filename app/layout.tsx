import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aspirational Survey',
  description: 'Choose your aspirational object',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
