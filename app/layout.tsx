import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text, Playfair_Display } from "next/font/google"
import "./globals.css"

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600"],
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lovely Andeo - Aerospace Engineer & AI Researcher",
  description:
    "Personal portfolio of Lovely Andeo, Master's student in Aerospace Science & Engineering at University of Toronto, specializing in AI for space robotics.",
  keywords: "aerospace engineering, AI, space robotics, Canadarm3, machine learning, space technology",
  authors: [{ name: "Lovely Andeo" }],
  openGraph: {
    title: "Lovely Andeo - Aerospace Engineer & AI Researcher",
    description:
      "Bridging AI and space robotics to advance autonomous systems for the next generation of space exploration",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${playfairDisplay.variable}`}>
      <body className="font-crimson antialiased">{children}</body>
    </html>
  )
}
