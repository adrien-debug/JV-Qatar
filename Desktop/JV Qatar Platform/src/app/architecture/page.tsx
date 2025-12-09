'use client'

import { siteConfig } from '@/lib/siteConfig'
import GridOverview from '@/components/GridOverview'
import GlobalInfoPanel from '@/components/GlobalInfoPanel'

export default function ArchitecturePage() {
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
          Architecture Électrique Globale
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
            {siteConfig.location}
          </p>
        </div>
      </header>

      {/* Architecture Diagram */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Diagramme de l'Architecture
        </h2>
        <GridOverview site={siteConfig} />
      </section>

      {/* Global Info Panel */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Informations Globales
        </h2>
        <GlobalInfoPanel site={siteConfig} />
      </section>
    </div>
  )
}
