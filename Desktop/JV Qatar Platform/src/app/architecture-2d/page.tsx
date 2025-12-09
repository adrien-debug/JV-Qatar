'use client'

import { siteConfig } from '@/lib/siteConfig'
import Architecture2D from '@/components/Architecture2D'

export default function Architecture2DPage() {
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
          Architecture 2D Interactive
        </h1>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-3)'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-hearst-green)',
            boxShadow: '0 0 8px var(--color-primary-hearst-green)'
          }} />
          <p style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)',
            fontWeight: 'var(--font-weight-medium)'
          }}>
            Visualisation complète de l'architecture électrique en 2D
          </p>
        </div>
      </header>

      {/* Architecture 2D */}
      <section>
        <Architecture2D site={siteConfig} />
      </section>

      {/* Informations supplémentaires */}
      <section style={{
        marginTop: 'var(--spacing-10)',
        padding: 'var(--spacing-8)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-default)',
        border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Informations sur l'Architecture
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Connexion Réseau
            </h3>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--spacing-2)'
            }}>
              <strong>Opérateur:</strong> {siteConfig.gridConnection.operator}
            </p>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--spacing-2)'
            }}>
              <strong>Tension:</strong> {siteConfig.gridConnection.gridVoltageKV} kV
            </p>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)'
            }}>
              <strong>Puissance max:</strong> {siteConfig.gridConnection.maxContractPowerMW} MW
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Transformation
            </h3>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--spacing-2)'
            }}>
              <strong>Poste:</strong> {siteConfig.gridConnection.substationName}
            </p>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)'
            }}>
              <strong>Rapport:</strong> {siteConfig.gridConnection.substationPrimaryKV} kV / {siteConfig.gridConnection.substationSecondaryKV} kV
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Distribution
            </h3>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--spacing-2)'
            }}>
              <strong>Blocs:</strong> {siteConfig.blocks.length}
            </p>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--spacing-2)'
            }}>
              <strong>Puissance totale:</strong> {siteConfig.totalPowerMW} MW
            </p>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)'
            }}>
              <strong>Tension distribution:</strong> {siteConfig.gridConnection.clientVoltageKV} kV
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
