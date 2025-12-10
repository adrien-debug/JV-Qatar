'use client'

import { siteConfig } from '@/lib/siteConfig'
import Architecture2D from '@/components/Architecture2D'

export default function Architecture2DPage() {
  return (
    <div style={{
      minHeight: 'calc(100vh - var(--structure-header-height))',
      backgroundColor: 'var(--color-bg-content)',
      color: 'var(--color-text-primary)',
      padding: 'var(--spacing-8) var(--spacing-6)'
    }}>
      {/* Header */}
      <header style={{
        marginBottom: 'var(--spacing-8)',
        paddingBottom: 'var(--spacing-6)'
      }}>
        <h1 style={{
          fontSize: 'var(--font-size-display)',
          lineHeight: 'var(--line-height-display)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-3)',
          letterSpacing: 'var(--letter-spacing-tight)'
        }}>
          Architecture 2D
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body-minor)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-normal)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          Interactive 2D electrical architecture visualization
        </p>
      </header>

      {/* Architecture 2D */}
      <section>
        <Architecture2D site={siteConfig} />
      </section>

      {/* Informations supplémentaires */}
      <section style={{
        marginTop: 'var(--spacing-4)',
        padding: 'var(--spacing-5)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-default)',
        border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-text-primary)'
        }}>
          Informations sur l'Architecture
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Grid Connection
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
              <strong>Blocks:</strong> {siteConfig.blocks.length}
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
