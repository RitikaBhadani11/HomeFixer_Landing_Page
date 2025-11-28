import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "HomeFixer - Professional Home Services On-Demand",
  description:
    "Book trusted professionals for plumbing, electrical, cleaning & repairs in minutes. 24/7 emergency services with verified experts.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
