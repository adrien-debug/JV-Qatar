'use client'

import { PowerBlock, Transformer, Container } from '@/lib/types'
import { transformerLoadCurrent, transformerLoadPercentage, containerCurrent } from '@/lib/siteConfig'

interface BlockDetailPanelProps {
  block: PowerBlock
  selectedTransformerId?: string
  selectedContainerId?: string
}

export default function BlockDetailPanel({
  block,
  selectedTransformerId,
  selectedContainerId
}: BlockDetailPanelProps) {
  const selectedTransformer = selectedTransformerId
    ? block.transformers.find(t => t.id === selectedTransformerId)
    : null

  const selectedContainer = selectedContainerId
    ? block.containers.find(c => c.id === selectedContainerId)
    : null

  return (
    <div style={{
      padding: 'var(--spacing-6)',
      backgroundColor: 'var(--color-bg-secondary)',
      borderRadius: 'var(--radius-default)',
      border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
      height: 'fit-content',
      position: 'sticky',
      top: 'var(--spacing-8)'
    }}>
      {selectedTransformer ? (
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-subsection-title)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary-hearst-green)',
            marginBottom: 'var(--spacing-4)'
          }}>
            Détails Transformateur
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-4)'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Nom
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedTransformer.name}
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Puissance nominale
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedTransformer.ratingMVA} MVA
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Transformation
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedTransformer.primaryVoltageKV}/{selectedTransformer.secondaryVoltageKV} kV
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Charge estimée
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                ~3.2 MW
              </div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-secondary)',
                marginTop: 'var(--spacing-1)'
              }}>
                ~{transformerLoadCurrent} A, ~{transformerLoadPercentage}% du nominal
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Conteneurs alimentés
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-2)'
              }}>
                {selectedTransformer.containersServed.map((containerId) => {
                  const container = block.containers.find(c => c.id === containerId)
                  return container ? (
                    <div
                      key={containerId}
                      style={{
                        padding: 'var(--spacing-2)',
                        backgroundColor: 'var(--color-bg-tertiary)',
                        borderRadius: 'var(--radius-small)',
                        fontSize: 'var(--font-size-caption)',
                        color: 'var(--color-text-secondary)'
                      }}
                    >
                      {container.name}
                    </div>
                  ) : null
                })}
              </div>
            </div>
          </div>
        </div>
      ) : selectedContainer ? (
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-subsection-title)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary-hearst-green)',
            marginBottom: 'var(--spacing-4)'
          }}>
            Détails Conteneur
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-4)'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Nom
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedContainer.name}
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Type
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedContainer.type}
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Bloc
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedContainer.blockId}
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Transformateur
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {block.transformers.find(t => t.id === selectedContainer.transformerId)?.name}
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Puissance
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedContainer.nominalPowerMW} MW IT + {selectedContainer.coolingPowerMW} MW refroidissement
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-primary-hearst-green)',
                marginTop: 'var(--spacing-1)'
              }}>
                Total: {selectedContainer.totalPowerMW} MW
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Tension
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedContainer.supplyVoltageKV} kV
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-1)'
              }}>
                Courant
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                ~{containerCurrent} A
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: 'var(--spacing-8)',
          color: 'var(--color-text-muted)'
        }}>
          <div style={{
            fontSize: 'var(--font-size-body)',
            marginBottom: 'var(--spacing-2)'
          }}>
            Sélectionnez un transformateur ou un conteneur pour voir les détails
          </div>
          <div style={{
            fontSize: 'var(--font-size-caption)',
            color: 'var(--color-text-muted)'
          }}>
            Survolez ou cliquez sur un élément du diagramme
          </div>
        </div>
      )}
    </div>
  )
}

