'use client'

import { siteConfig, siteCurrent33kV, blockCurrent33kV } from '@/lib/siteConfig'
import Link from 'next/link'
import VisualStats from '@/components/VisualStats'

export default function DashboardPage() {
  const totalContainers = siteConfig.blocks.reduce((sum, block) => sum + block.numContainers, 0)
  const totalTransformers = siteConfig.blocks.reduce((sum, block) => sum + block.numTransformers, 0)
  const totalPowerMW = siteConfig.totalPowerMW

  const stats = [
    {
      label: 'Puissance Totale',
      value: `${totalPowerMW} MW`,
      icon: '⚡',
      color: 'var(--color-primary-hearst-green)',
      href: '/architecture'
    },
    {
      label: 'Conteneurs',
      value: totalContainers.toString(),
      icon: '📦',
      color: 'var(--color-secondary-info)',
      href: '/conteneurs'
    },
    {
      label: 'Transformateurs',
      value: totalTransformers.toString(),
      icon: '🔌',
      color: 'var(--color-primary-hearst-green)',
      href: '/architecture'
    },
    {
      label: 'Blocs de Puissance',
      value: siteConfig.blocks.length.toString(),
      icon: '🏗️',
      color: 'var(--color-secondary-accent)',
      href: '/'
    }
  ]

  const quickLinks = [
    { label: 'Architecture 2D', href: '/architecture-2d', icon: '📐' },
    { label: 'Spécifications Conteneurs', href: '/conteneurs', icon: '📦' },
    { label: 'Architecture Globale', href: '/architecture', icon: '⚡' },
    { label: 'Menu Principal', href: '/menu', icon: '📋' }
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
          Tableau de Bord
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          Vue d'ensemble des statistiques et métriques du site
        </p>
      </header>

      {/* Statistiques Visuelles */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Visualisations Statistiques
        </h2>
        <VisualStats site={siteConfig} />
      </section>

      {/* Statistiques Principales */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Statistiques Globales
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          {stats.map((stat, index) => (
            <Link
              key={index}
              href={stat.href}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                padding: 'var(--spacing-6)',
                backgroundColor: 'var(--color-bg-secondary)',
                borderRadius: 'var(--radius-default)',
                border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
                cursor: 'pointer',
                transition: 'var(--transition-base)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-4)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = stat.color
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 0 20px ${stat.color}40`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-thin-color)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{
                    fontSize: 'var(--font-size-display)',
                    color: stat.color,
                    fontWeight: 'var(--font-weight-bold)'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-section-title)'
                  }}>
                    {stat.icon}
                  </div>
                </div>
                <div style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  {stat.label}
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(90deg, ${stat.color}, transparent)`,
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Informations Techniques */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Informations Techniques
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          <div style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-4)',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              Connexion Réseau
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Opérateur:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.gridConnection.operator}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Tension:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.gridConnection.gridVoltageKV} kV
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Puissance Max:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.gridConnection.maxContractPowerMW} MW
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Courant @ 33kV:</span>
                <span style={{ color: 'var(--color-primary-hearst-green)', fontWeight: 'var(--font-weight-semibold)' }}>
                  ~{siteCurrent33kV} A
                </span>
              </div>
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-4)',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              Spécifications Conteneurs
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Type:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.containerSpec.type}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Puissance/Unité:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.containerSpec.totalPowerMW} MW
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Tension:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.containerSpec.supplyVoltageKV} kV
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Par Transformateur:</span>
                <span style={{ color: 'var(--color-primary-hearst-green)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.containerSpec.containersPerTransformer}
                </span>
              </div>
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-4)',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              Répartition par Bloc
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)'
            }}>
              {siteConfig.blocks.map((block) => (
                <div
                  key={block.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-bg-tertiary)',
                    borderRadius: 'var(--radius-small)'
                  }}
                >
                  <span style={{ color: 'var(--color-text-secondary)' }}>{block.name}:</span>
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                    {block.targetPowerMW} MW
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liens Rapides */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Accès Rapide
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--spacing-5)'
        }}>
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                padding: 'var(--spacing-5)',
                backgroundColor: 'var(--color-bg-secondary)',
                borderRadius: 'var(--radius-default)',
                border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
                cursor: 'pointer',
                transition: 'var(--transition-base)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary-hearst-green)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-glow-green)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-thin-color)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{ fontSize: 'var(--font-size-section-title)' }}>
                  {link.icon}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {link.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
