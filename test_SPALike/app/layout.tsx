"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Scroll automatique vers la bonne section quand l’URL change
  useEffect(() => {
    const id = pathname === "/" ? "home" : pathname.replace("/", "")
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [pathname])

  return (
    <html lang="fr">
      <body>
        <nav style={{ position: "fixed", top: 0, width: "100%", background: "#fff", padding: "1rem", display: "flex", gap: "1rem", borderBottom: "1px solid #ddd", zIndex: 10 }}>
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div style={{ marginTop: "60px" }}>
          {/* Rendu de toutes les sections */}
          <section id="home"><children.type {...children.props} /></section>
          <section id="services"><children.type {...children.props} /></section>
          <section id="contact"><children.type {...children.props} /></section>
        </div>
      </body>
    </html>
  )
}
