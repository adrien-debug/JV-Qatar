'use client'

import { siteConfig } from '@/lib/siteConfig'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function MenuPage() {
  const router = useRouter()

  const menuSections = [
    {
      title: 'Vue d\'ensemble',
      items: [
        {
          title: 'Accueil',
          description: 'Vue globale de l\'installation avec architecture électrique',
          href: '/',
          icon: '🏠'
        },
        {
          title: 'Architecture Globale',
          description: 'Diagramme complet de l\'architecture électrique du site',
          href: '/architecture',
          icon: '⚡'
        },
        {
          title: 'Architecture 2D Interactive',
          description: 'Visualisation 2D interactive avec SVG de l\'architecture complète',
          href: '/architecture-2d',
          icon: '📐'
        }
      ]
    },
    {
      title: 'Blocs de Puissance',
      items: siteConfig.blocks.map((block) => ({
        title: block.name,
        description: `${block.numContainers} conteneurs • ${block.targetPowerMW} MW • ${block.numTransformers} transformateurs`,
        href: `/blocks/${block.id}`,
        icon: '🔌'
      }))
    },
    {
      title: 'Informations Techniques',
      items: [
        {
          title: 'Spécifications des Conteneurs',
          description: `Type: ${siteConfig.containerSpec.type} • Puissance: ${siteConfig.containerSpec.totalPowerMW} MW • Dimensions et répartition`,
          href: '/conteneurs',
          icon: '📦',
          disabled: false
        },
        {
          title: 'Connexion au Réseau',
          description: `Opérateur: ${siteConfig.gridConnection.operator} • ${siteConfig.gridConnection.gridVoltageKV} kV • Détails complets`,
          href: '/reseau',
          icon: '🔗',
          disabled: false
        },
        {
          title: 'Tableau de Bord',
          description: 'Vue d\'ensemble des statistiques et métriques du site',
          href: '/dashboard',
          icon: '📊',
          disabled: false
        }
      ]
    }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)',
      padding: 'var(--spacing-8)'
    }}>
      {/* Header */}
      <header style={{
        marginBottom: 'var(--spacing-10)',
        paddingBottom: 'var(--spacing-8)',
        borderBottom: '2px solid var(--color-ash-grey-accent)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '4px',
          background: 'var(--gradient-primary)',
          borderRadius: 'var(--radius-full)'
        }} />
        <h1 style={{
          fontSize: 'var(--font-size-display)',
          lineHeight: 'var(--line-height-display)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-bold)',
          marginBottom: 'var(--spacing-3)',
          textShadow: '0 0 20px rgba(138, 253, 129, 0.3)',
          letterSpacing: 'var(--letter-spacing-tight)'
        }}>
          Menu de Navigation
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          Accédez rapidement à toutes les sections de la plateforme
        </p>
      </header>

      {/* Menu Sections */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-10)'
      }}>
        {menuSections.map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h2 style={{
              fontSize: 'var(--font-size-section-title)',
              lineHeight: 'var(--line-height-section-title)',
              marginBottom: 'var(--spacing-6)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              {section.title}
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--spacing-5)'
            }}>
              {section.items.map((item, itemIndex) => {
                const isDisabled = item.disabled
                const Component = isDisabled ? 'div' : Link
                const props = isDisabled ? {} : { href: item.href }

                return (
                  <Component
                    key={itemIndex}
                    {...props}
                    onClick={isDisabled ? undefined : (e: any) => {
                      if (item.href === '#') {
                        e.preventDefault()
                      }
                    }}
                    style={{
                      padding: 'var(--spacing-6)',
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
                      borderRadius: 'var(--radius-default)',
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: isDisabled ? 'not-allowed' : 'pointer',
                      transition: 'var(--transition-base)',
                      opacity: isDisabled ? 0.6 : 1,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e: any) => {
                      if (!isDisabled) {
                        e.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary)'
                        e.currentTarget.style.borderColor = 'var(--color-primary-hearst-green)'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                      }
                    }}
                    onMouseLeave={(e: any) => {
                      if (!isDisabled) {
                        e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)'
                        e.currentTarget.style.borderColor = 'var(--border-thin-color)'
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }
                    }}
                  >
                    {/* Icon */}
                    <div style={{
                      fontSize: 'var(--font-size-display)',
                      marginBottom: 'var(--spacing-4)',
                      display: 'inline-block'
                    }}>
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: 'var(--font-size-subsection-title)',
                      lineHeight: 'var(--line-height-subsection-title)',
                      marginBottom: 'var(--spacing-2)',
                      color: 'var(--color-text-primary)',
                      fontWeight: 'var(--font-weight-semibold)'
                    }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: 'var(--font-size-body)',
                      lineHeight: 'var(--line-height-normal)',
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      {item.description}
                    </p>

                    {/* Hover indicator */}
                    {!isDisabled && (
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '3px',
                        background: 'var(--gradient-primary)',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'var(--transition-base)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scaleX(1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scaleX(0)'
                      }}
                      />
                    )}
                  </Component>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Quick Stats Footer */}
      <footer style={{
        marginTop: 'var(--spacing-12)',
        paddingTop: 'var(--spacing-8)',
        borderTop: '2px solid var(--color-ash-grey-accent)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--spacing-6)'
      }}>
        <div>
          <div style={{
            fontSize: 'var(--font-size-display)',
            color: 'var(--color-primary-hearst-green)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-2)'
          }}>
            {siteConfig.totalPowerMW} MW
          </div>
          <div style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)'
          }}>
            Puissance Totale
          </div>
        </div>
        <div>
          <div style={{
            fontSize: 'var(--font-size-display)',
            color: 'var(--color-primary-hearst-green)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-2)'
          }}>
            {siteConfig.blocks.length}
          </div>
          <div style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)'
          }}>
            Blocs de Puissance
          </div>
        </div>
        <div>
          <div style={{
            fontSize: 'var(--font-size-display)',
            color: 'var(--color-primary-hearst-green)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-2)'
          }}>
            {siteConfig.blocks.reduce((sum, b) => sum + b.numContainers, 0)}
          </div>
          <div style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)'
          }}>
            Conteneurs Totaux
          </div>
        </div>
        <div>
          <div style={{
            fontSize: 'var(--font-size-display)',
            color: 'var(--color-primary-hearst-green)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-2)'
          }}>
            {siteConfig.gridConnection.gridVoltageKV} kV
          </div>
          <div style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)'
          }}>
            Tension Réseau
          </div>
        </div>
      </footer>
    </div>
  )
}
