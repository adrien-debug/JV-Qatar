'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import HomeIcon from '@/components/icons/HomeIcon'
import PlugIcon from '@/components/icons/PlugIcon'
import ContainerIcon from '@/components/icons/ContainerIcon'
import LinkIcon from '@/components/icons/LinkIcon'
import ChartIcon from '@/components/icons/ChartIcon'
import FullViewIcon from '@/components/icons/FullViewIcon'

interface MenuItem {
  title: string
  description: string
  href: string
  iconComponent: React.ComponentType<{ size?: number; color?: string; isActive?: boolean }>
  category: 'overview' | 'blocks' | 'technical'
  color?: string
}

const menuItems: MenuItem[] = [
  {
    title: 'Overview',
    description: 'Vue complète et simplifiée de toute l\'architecture',
    href: '/overview',
    iconComponent: HomeIcon,
    category: 'overview',
    color: '#2ECC71'
  },
  {
    title: 'Accueil',
    description: 'Vue globale de l\'installation avec architecture électrique',
    href: '/',
    iconComponent: HomeIcon,
    category: 'overview',
    color: '#58D68D'
  },
  {
    title: 'Full View',
    description: 'Vue complète de l\'architecture électrique avec tous les détails',
    href: '/full-view',
    iconComponent: FullViewIcon,
    category: 'overview',
    color: '#D4AF37'
  },
  {
    title: 'Dashboard',
    description: 'Vue d\'ensemble des statistiques et métriques du site',
    href: '/dashboard',
    iconComponent: ChartIcon,
    category: 'overview',
    color: '#10B981'
  },
  ...siteConfig.blocks.map((block) => ({
    title: block.name,
    description: `${block.numContainers} conteneurs • ${block.targetPowerMW} MW • ${block.numTransformers} transformateurs`,
    href: `/blocks/${block.id}`,
    iconComponent: PlugIcon,
    category: 'blocks' as const,
    color: '#2ECC71'
  })),
  {
    title: 'Spécifications Conteneurs',
    description: `Type: ${siteConfig.containerSpec.type} • Puissance: ${siteConfig.containerSpec.totalPowerMW} MW • Dimensions et distribution`,
    href: '/conteneurs',
    iconComponent: ContainerIcon,
    category: 'technical',
    color: '#4ECDC4'
  },
  {
    title: 'Connexion Réseau',
    description: `Opérateur: ${siteConfig.gridConnection.operator} • ${siteConfig.gridConnection.gridVoltageKV} kV • Détails complets`,
    href: '/reseau',
    iconComponent: LinkIcon,
    category: 'technical',
    color: '#3498DB'
  }
]

interface FullViewMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function FullViewMenu({ isOpen, onClose }: FullViewMenuProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'overview' | 'blocks' | 'technical'>('all')
  const menuRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Filtrer les items selon la catégorie
  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  // Suivre la position de la souris pour les effets de lumière
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const categories = [
    { id: 'all', label: 'Tout', count: menuItems.length },
    { id: 'overview', label: 'Vue d\'ensemble', count: menuItems.filter(i => i.category === 'overview').length },
    { id: 'blocks', label: 'Blocs', count: menuItems.filter(i => i.category === 'blocks').length },
    { id: 'technical', label: 'Technique', count: menuItems.filter(i => i.category === 'technical').length }
  ]

  return (
    <>
      {/* Overlay avec effet de lumière */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(18, 18, 18, 0.95) 50%, rgba(0, 0, 0, 0.85) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          zIndex: 9998,
          animation: 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />

      {/* Menu principal */}
      <div
        ref={menuRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--spacing-8)',
          pointerEvents: 'none',
          overflow: 'auto'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1400px',
            maxHeight: 'calc(100vh - var(--spacing-8) * 2)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            backdropFilter: 'blur(40px) saturate(200%)',
            WebkitBackdropFilter: 'blur(40px) saturate(200%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '32px',
            boxShadow: `
              0 32px 64px rgba(0, 0, 0, 0.4),
              0 8px 16px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
            overflow: 'hidden',
            position: 'relative',
            pointerEvents: 'auto',
            animation: 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto'
          }}
        >
          {/* Effet de lumière qui suit la souris */}
          <div
            style={{
              position: 'absolute',
              left: mousePosition.x - 200,
              top: mousePosition.y - 200,
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(46, 204, 113, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              transition: 'left 0.3s ease-out, top 0.3s ease-out',
              filter: 'blur(40px)'
            }}
          />

          {/* Header */}
          <div
            style={{
              padding: 'var(--spacing-8) var(--spacing-8) var(--spacing-6)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-6)'
            }}>
              <div>
                <h1 style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                  marginBottom: 'var(--spacing-2)',
                  letterSpacing: '-1px',
                  lineHeight: 1.1
                }}>
                  Navigation
                </h1>
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  margin: 0,
                  fontWeight: 400,
                  letterSpacing: '0.3px'
                }}>
                  Accès rapide à toutes les sections de la plateforme
                </p>
              </div>
              
              <button
                onClick={onClose}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.transform = 'rotate(90deg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.transform = 'rotate(0deg)'
                }}
              >
                ×
              </button>
            </div>

            {/* Filtres de catégories */}
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-3)',
              flexWrap: 'wrap'
            }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as any)}
                  style={{
                    padding: 'var(--spacing-3) var(--spacing-5)',
                    borderRadius: '12px',
                    border: selectedCategory === category.id
                      ? '1px solid rgba(46, 204, 113, 0.5)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    background: selectedCategory === category.id
                      ? 'rgba(46, 204, 113, 0.15)'
                      : 'rgba(255, 255, 255, 0.05)',
                    color: selectedCategory === category.id
                      ? '#2ECC71'
                      : 'rgba(255, 255, 255, 0.7)',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: selectedCategory === category.id ? 600 : 400,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category.id) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.id) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {category.label}
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '8px',
                    background: selectedCategory === category.id
                      ? 'rgba(46, 204, 113, 0.2)'
                      : 'rgba(255, 255, 255, 0.1)',
                    fontSize: '12px',
                    fontWeight: 600
                  }}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenu scrollable */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              padding: 'var(--spacing-6) var(--spacing-8)',
              position: 'relative',
              zIndex: 1,
              minHeight: 0
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--spacing-5)'
            }}>
              {filteredItems.map((item, index) => {
                const isActive = pathname === item.href
                const isHovered = hoveredItem === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                  >
                    <div
                      onMouseEnter={() => setHoveredItem(item.href)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{
                        padding: 'var(--spacing-6)',
                        background: isActive
                          ? 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(46, 204, 113, 0.08) 100%)'
                          : isHovered
                          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                        border: isActive
                          ? '1px solid rgba(46, 204, 113, 0.4)'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                        boxShadow: isHovered
                          ? '0 12px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)'
                          : '0 4px 16px rgba(0, 0, 0, 0.2)',
                        animation: `fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s both`
                      }}
                    >
                      {/* Effet de brillance au survol */}
                      {isHovered && (
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                            animation: 'shine 0.6s ease-out'
                          }}
                        />
                      )}

                      {/* Ligne de couleur décorative */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: `linear-gradient(90deg, ${item.color || '#2ECC71'}, ${item.color || '#2ECC71'}80)`,
                          opacity: isActive || isHovered ? 1 : 0.5,
                          transition: 'opacity 0.3s'
                        }}
                      />

                      {/* Icône */}
                      <div style={{
                        marginBottom: 'var(--spacing-4)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-4)'
                      }}>
                        <div style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '14px',
                          background: isActive
                            ? `linear-gradient(135deg, ${item.color || '#2ECC71'}, ${item.color || '#58D68D'}80)`
                            : 'rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: isActive
                            ? 'none'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s',
                          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                        }}>
                          <item.iconComponent
                            size={28}
                            color={isActive ? '#FFFFFF' : item.color || '#2ECC71'}
                            isActive={isActive}
                          />
                        </div>
                        {isActive && (
                          <div style={{
                            padding: '4px 12px',
                            borderRadius: '8px',
                            background: 'rgba(46, 204, 113, 0.2)',
                            border: '1px solid rgba(46, 204, 113, 0.3)',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#2ECC71',
                            letterSpacing: '0.5px'
                          }}>
                            ACTIF
                          </div>
                        )}
                      </div>

                      {/* Titre */}
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        margin: 0,
                        marginBottom: 'var(--spacing-2)',
                        letterSpacing: '-0.3px',
                        lineHeight: 1.3
                      }}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        margin: 0,
                        lineHeight: 1.6,
                        fontWeight: 400
                      }}>
                        {item.description}
                      </p>

                      {/* Indicateur de flèche */}
                      <div style={{
                        position: 'absolute',
                        bottom: 'var(--spacing-6)',
                        right: 'var(--spacing-6)',
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s',
                        transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                        opacity: isHovered ? 1 : 0.6
                      }}>
                        <span style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '18px',
                          fontWeight: 300
                        }}>
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer avec stats */}
          <div style={{
            padding: 'var(--spacing-6) var(--spacing-8)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(0, 0, 0, 0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'var(--spacing-6)',
            position: 'relative',
            zIndex: 1
          }}>
            <div>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #2ECC71, #58D68D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-2)',
                letterSpacing: '-0.5px'
              }}>
                {siteConfig.totalPowerMW} MW
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 500,
                letterSpacing: '0.5px'
              }}>
                Puissance Totale
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #2ECC71, #58D68D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-2)',
                letterSpacing: '-0.5px'
              }}>
                {siteConfig.blocks.length}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 500,
                letterSpacing: '0.5px'
              }}>
                Power Blocks
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #2ECC71, #58D68D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-2)',
                letterSpacing: '-0.5px'
              }}>
                {siteConfig.blocks.reduce((sum, b) => sum + b.numContainers, 0)}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 500,
                letterSpacing: '0.5px'
              }}>
                Total Containers
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #2ECC71, #58D68D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-2)',
                letterSpacing: '-0.5px'
              }}>
                {siteConfig.gridConnection.gridVoltageKV} kV
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 500,
                letterSpacing: '0.5px'
              }}>
                Grid Voltage
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
