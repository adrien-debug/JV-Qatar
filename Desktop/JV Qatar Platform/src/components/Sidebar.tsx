'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { useState, useEffect } from 'react'
import HomeIcon from '@/components/icons/HomeIcon'
import ChartIcon from '@/components/icons/ChartIcon'
import ContainerIcon from '@/components/icons/ContainerIcon'
import LinkIcon from '@/components/icons/LinkIcon'
import FullViewIcon from '@/components/icons/FullViewIcon'

interface NavItem {
  label: string
  href: string
  iconComponent: React.ComponentType<{ size?: number; color?: string; isActive?: boolean }>
}

const navItems: NavItem[] = [
  { label: 'Vue d\'Ensemble', href: '/overview', iconComponent: HomeIcon },
  { label: 'Dashboard', href: '/dashboard', iconComponent: ChartIcon },
  { label: 'Full View', href: '/full-view', iconComponent: FullViewIcon },
  { label: 'Containers', href: '/conteneurs', iconComponent: ContainerIcon },
  { label: 'Network', href: '/reseau', iconComponent: LinkIcon },
]

interface SidebarProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
}

export default function Sidebar({ isCollapsed, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside style={{
      position: 'fixed',
      left: 0,
      top: 'var(--structure-header-height)',
      height: 'calc(100vh - var(--structure-header-height))',
      width: isCollapsed ? 'var(--layout-sidebar-width-collapsed)' : 'var(--layout-sidebar-width)',
      backgroundColor: 'var(--color-bg-sidebar)',
      borderRight: '1px solid #E0E0E0',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width var(--transition-base)',
      zIndex: 998,
      boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    }}>
      {/* Collapse Button */}
      <div style={{
        padding: 'var(--spacing-3)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'flex-end',
        gap: 'var(--spacing-2)',
        minHeight: '50px',
        flexShrink: 0
      }}>
        <button
          onClick={onToggleCollapse}
          style={{
            padding: 'var(--spacing-2)',
            backgroundColor: 'transparent',
            color: 'var(--color-text-primary-on-dark)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-base)',
            minWidth: '32px',
            minHeight: '32px',
            border: 'none',
            borderRadius: 'var(--radius-sm)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-primary-hearst-green)'
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-primary-on-dark)'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Navigation Items */}
      <nav style={{
        flex: 1,
        padding: 'var(--spacing-3)',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-2)',
        minHeight: 0
      }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                padding: 'var(--spacing-3)',
                backgroundColor: isActive
                  ? 'var(--color-bg-active-light)'
                  : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-3)',
                cursor: 'pointer',
                transition: 'var(--transition-base)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-sm)',
                margin: '0 var(--spacing-2)'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
              >
                <div style={{
                  minWidth: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive
                    ? 'var(--color-primary-hearst-green)'
                    : 'var(--color-text-primary-on-dark)'
                }}>
                  <item.iconComponent 
                    size={18} 
                    color={isActive
                      ? 'var(--color-primary-hearst-green)'
                      : 'var(--color-text-primary-on-dark)'}
                    isActive={isActive}
                  />
                </div>
                {!isCollapsed && (
                  <span style={{
                    fontSize: 'var(--font-size-body)',
                    fontWeight: isActive
                      ? 'var(--font-weight-semibold)'
                      : 'var(--font-weight-normal)',
                    color: isActive
                      ? 'var(--color-primary-hearst-green)'
                      : 'var(--color-text-primary-on-dark)',
                    whiteSpace: 'nowrap',
                    transition: 'var(--transition-base)'
                  }}>
                    {item.label}
                  </span>
                )}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3px',
                    height: '60%',
                    backgroundColor: 'var(--color-primary-hearst-green)',
                    borderRadius: '0 var(--radius-full) var(--radius-full) 0'
                  }} />
                )}
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Footer avec stats */}
      {!isCollapsed && (
        <div style={{
          padding: 'var(--spacing-4)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: 'transparent',
          flexShrink: 0
        }}>
          <div style={{
            fontSize: 'var(--font-size-caption)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-2)',
            fontWeight: 'var(--font-weight-semibold)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--letter-spacing-wide)'
          }}>
            Statistiques
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-2)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 'var(--font-size-caption)'
            }}>
              <span style={{ color: 'var(--color-text-primary-on-dark)' }}>Power:</span>
              <span style={{ 
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.totalPowerMW} MW
              </span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 'var(--font-size-caption)'
            }}>
              <span style={{ color: 'var(--color-text-primary-on-dark)' }}>Blocks:</span>
              <span style={{ 
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.blocks.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
