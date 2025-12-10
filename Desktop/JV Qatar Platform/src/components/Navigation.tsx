'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
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
  { label: 'Containers', href: '/conteneurs' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'var(--color-bg-primary)',
      borderBottom: '1px solid #E0E0E0',
      backdropFilter: 'blur(10px)',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{
        maxWidth: 'var(--structure-content-max-width)',
        margin: '0 auto',
        padding: 'var(--spacing-4) var(--spacing-5)',
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
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            style={{
              display: 'block',
              flexShrink: 0
            }}
          />
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
                    ? '#000000'
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
                    e.currentTarget.style.backgroundColor = 'rgba(46, 204, 113, 0.05)'
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
