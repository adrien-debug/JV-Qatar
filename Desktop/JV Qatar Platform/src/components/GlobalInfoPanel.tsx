'use client'

import { SiteConfig } from '@/lib/types'
import { 
  siteCurrent33kV, 
  blockCurrent33kV, 
  containerCurrent,
  transformerLoadCurrent,
  transformerLoadPercentage
} from '@/lib/siteConfig'

interface GlobalInfoPanelProps {
  site: SiteConfig
}

export default function GlobalInfoPanel({ site }: GlobalInfoPanelProps) {
  return (
    <div style={{
      padding: 'var(--spacing-8)',
      backgroundColor: 'var(--color-bg-secondary)',
      borderRadius: 'var(--radius-default)',
      border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-6)'
      }}>
        {/* Site-Level Info */}
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-subsection-title)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary-hearst-green)',
            marginBottom: 'var(--spacing-4)'
          }}>
            Informations du Site
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-3)'
          }}>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Puissance totale:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                {site.totalPowerMW} MW
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Courant @ 33 kV:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                ~{siteCurrent33kV} A
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Par bloc:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                ~25.6 MW, ~{blockCurrent33kV} A
              </span>
            </div>
          </div>
        </div>

        {/* Container Spec */}
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-subsection-title)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary-hearst-green)',
            marginBottom: 'var(--spacing-4)'
          }}>
            Spécifications Conteneur
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-3)'
          }}>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Type:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                {site.containerSpec.type}
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Puissance totale:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                {site.containerSpec.totalPowerMW} MW
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Tension:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                {site.containerSpec.supplyVoltageKV} kV
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Courant:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                ~{containerCurrent} A
              </span>
            </div>
          </div>
        </div>

        {/* Grid Connection */}
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-subsection-title)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary-hearst-green)',
            marginBottom: 'var(--spacing-4)'
          }}>
            Connexion Réseau
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-3)'
          }}>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Opérateur:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                {site.gridConnection.operator}
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Poste:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                {site.gridConnection.substationName}
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Transformation:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                {site.gridConnection.substationPrimaryKV}/{site.gridConnection.substationSecondaryKV} kV
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Puissance max contrat:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                {site.gridConnection.maxContractPowerMW} MW
              </span>
            </div>
          </div>
        </div>

        {/* Transformer Info */}
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-subsection-title)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary-hearst-green)',
            marginBottom: 'var(--spacing-4)'
          }}>
            Transformateurs
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-3)'
          }}>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Puissance nominale:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                3.75 MVA
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Transformation:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                33/0.4 kV
              </span>
            </div>
            <div>
              <span style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Charge estimée:
              </span>
              <span style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginLeft: 'var(--spacing-2)'
              }}>
                ~3.2 MW, ~{transformerLoadCurrent} A, ~{transformerLoadPercentage}% du nominal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

