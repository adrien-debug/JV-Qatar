import type { Metadata } from 'next'
import '../styles/global.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Qatar 100MW Hydro Mining Site - Visualization',
  description: 'Interactive visualization of the 100 MW hydro-cooled Bitcoin mining site near Doha Airport',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

