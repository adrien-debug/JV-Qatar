import type { Metadata } from 'next'
import '../styles/global.css'
import SidebarWrapper from '@/components/SidebarWrapper'

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
      <body style={{
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        backgroundColor: 'var(--color-bg-content)'
      }}>
        <SidebarWrapper>
          {children}
        </SidebarWrapper>
      </body>
    </html>
  )
}

