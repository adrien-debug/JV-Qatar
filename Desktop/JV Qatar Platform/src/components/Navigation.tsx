'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

interface NavItem {
  label: string
  href: string
  icon?: string
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Menu', href: '/menu' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Architecture 2D', href: '/architecture-2d' },
  { label: 'Conteneurs', href: '/conteneurs' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'var(--color-bg-primary)',
      borderBottom: '2px solid var(--color-ash-grey-accent)',
      backdropFilter: 'blur(10px)',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{
        maxWidth: 'var(--structure-content-max-width)',
        margin: '0 auto',
        padding: 'var(--spacing-4) var(--spacing-8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--spacing-6)'
      }}>
        {/* Logo / Site Name */}
        <Link 
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-3)'
          }}
        >
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-hearst-green)',
            boxShadow: '0 0 12px var(--color-primary-hearst-green)'
          }} />
          <span style={{
            fontSize: 'var(--font-size-subsection-title)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary-hearst-green)',
            letterSpacing: 'var(--letter-spacing-tight)'
          }}>
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-2)',
          alignItems: 'center'
        }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: 'var(--spacing-3) var(--spacing-5)',
                  backgroundColor: isActive
                    ? 'var(--color-primary-hearst-green)'
                    : 'transparent',
                  color: isActive
                    ? 'var(--color-text-default)'
                    : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-small)',
                  fontSize: 'var(--font-size-body)',
                  fontWeight: isActive
                    ? 'var(--font-weight-semibold)'
                    : 'var(--font-weight-normal)',
                  transition: 'var(--transition-base)',
                  border: isActive
                    ? 'none'
                    : '1px solid transparent',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)'
                    e.currentTarget.style.color = 'var(--color-text-primary)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                  }
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
