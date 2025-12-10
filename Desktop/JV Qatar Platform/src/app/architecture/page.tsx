'use client'

import { siteConfig } from '@/lib/siteConfig'
import GridOverview from '@/components/GridOverview'
import GlobalInfoPanel from '@/components/GlobalInfoPanel'

export default function ArchitecturePage() {
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
          Architecture
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body-minor)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-normal)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          Global electrical architecture overview
        </p>
      </header>

      {/* Architecture Diagram */}
      <section style={{ marginBottom: 'var(--spacing-4)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-4)',
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
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-text-primary)'
        }}>
          Informations Globales
        </h2>
        <GlobalInfoPanel site={siteConfig} />
      </section>
    </div>
  )
}
