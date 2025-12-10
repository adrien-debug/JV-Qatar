'use client'

import { SiteConfig, PowerBlock } from '@/lib/types'
import { blockCurrent33kV } from '@/lib/siteConfig'

interface BlockHeaderProps {
  block: PowerBlock
  site: SiteConfig
  onSelectBlock: (id: string) => void
}

export default function BlockHeader({ block, site, onSelectBlock }: BlockHeaderProps) {
  return (
    <div>
      {/* Back Button */}
      <div style={{ marginBottom: 'var(--spacing-6)' }}>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)',
            color: 'var(--color-primary-hearst-green)',
            textDecoration: 'none',
            fontSize: 'var(--font-size-body)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          ← Retour à l'aperçu
        </a>
      </div>

      {/* Title and Block Selector */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 'var(--spacing-6)',
        flexWrap: 'wrap',
        gap: 'var(--spacing-4)'
      }}>
        <div>
          <h1 style={{
            fontSize: 'var(--font-size-page-title)',
            lineHeight: 'var(--line-height-page-title)',
            color: 'var(--color-primary-hearst-green)',
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-2)'
          }}>
            {block.name} – Vue Détaillée
          </h1>
          <p style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)'
          }}>
            {site.location}
          </p>
        </div>

        {/* Block Tabs */}
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-2)',
          backgroundColor: 'transparent',
          padding: 'var(--spacing-2)',
          borderRadius: 'var(--radius-default)',
          border: '1px solid #E0E0E0'
        }}>
          {site.blocks.map((b) => (
            <button
              key={b.id}
              onClick={() => onSelectBlock(b.id)}
              style={{
                padding: 'var(--spacing-3) var(--spacing-5)',
                backgroundColor: block.id === b.id
                  ? 'var(--color-bg-active-light)'
                  : 'transparent',
                color: block.id === b.id
                  ? 'var(--color-primary-hearst-green)'
                  : 'var(--color-text-secondary)',
                border: 'none',
                borderRadius: 'var(--radius-small)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-body)',
                fontWeight: block.id === b.id
                  ? 'var(--font-weight-semibold)'
                  : 'var(--font-weight-normal)',
                transition: 'var(--transition-base)'
              }}
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--spacing-4)',
        padding: 'var(--spacing-6)',
        backgroundColor: 'transparent',
        borderRadius: 'var(--radius-default)',
        border: '1px solid #E0E0E0'
      }}>
        <div>
          <div style={{
            fontSize: 'var(--font-size-caption)',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--spacing-1)'
          }}>
            Block Power
          </div>
          <div style={{
            fontSize: 'var(--font-size-section-title)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-primary-hearst-green)'
          }}>
            {block.targetPowerMW} MW
          </div>
        </div>

        <div>
          <div style={{
            fontSize: 'var(--font-size-caption)',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--spacing-1)'
          }}>
            Transformers
          </div>
          <div style={{
            fontSize: 'var(--font-size-section-title)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)'
          }}>
            {block.numTransformers}
          </div>
        </div>

        <div>
          <div style={{
            fontSize: 'var(--font-size-caption)',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--spacing-1)'
          }}>
            Containers
          </div>
          <div style={{
            fontSize: 'var(--font-size-section-title)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)'
          }}>
            {block.numContainers}
          </div>
        </div>

        <div>
          <div style={{
            fontSize: 'var(--font-size-caption)',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--spacing-1)'
          }}>
            Current @ 33 kV
          </div>
          <div style={{
            fontSize: 'var(--font-size-section-title)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)'
          }}>
            ~{blockCurrent33kV} A
          </div>
        </div>
      </div>
    </div>
  )
}

