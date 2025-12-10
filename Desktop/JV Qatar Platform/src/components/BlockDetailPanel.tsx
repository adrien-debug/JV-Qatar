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
      backgroundColor: 'transparent',
      borderRadius: 'var(--radius-default)',
      border: '1px solid #E0E0E0',
      boxShadow: 'none',
      height: 'fit-content',
      position: 'sticky',
      top: 'var(--spacing-5)'
    }}>
      {selectedTransformer ? (
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-subsection-title)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--spacing-5)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Transformateur
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-4)'
          }}>
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Name
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedTransformer.name}
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Power
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-primary-hearst-green)'
              }}>
                {selectedTransformer.ratingMVA} MVA
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Voltage
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedTransformer.primaryVoltageKV} kV → {selectedTransformer.secondaryVoltageKV} kV
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Load
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-primary-hearst-green)'
              }}>
                ~3.2 MW
              </div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-secondary)',
                marginTop: 'var(--spacing-1)'
              }}>
                {transformerLoadPercentage}% of capacity
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-3)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Connected Containers
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
                        padding: 'var(--spacing-3)',
                        backgroundColor: '#F5F5F5',
                        borderRadius: 'var(--radius-small)',
                        border: '1px solid #E0E0E0',
                        fontSize: 'var(--font-size-caption)',
                        color: 'var(--color-text-primary)',
                        fontWeight: 'var(--font-weight-medium)'
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
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--spacing-5)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Container
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-4)'
          }}>
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Name
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedContainer.name}
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
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

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Block
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {selectedContainer.blockId}
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Transformer
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}>
                {block.transformers.find(t => t.id === selectedContainer.transformerId)?.name}
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Power
              </div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Mining: {selectedContainer.nominalPowerMW} MW<br/>
                Cooling: {selectedContainer.coolingPowerMW} MW
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-primary-hearst-green)',
                marginTop: 'var(--spacing-2)'
              }}>
                Total: {selectedContainer.totalPowerMW} MW
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Voltage
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-primary-hearst-green)'
              }}>
                {selectedContainer.supplyVoltageKV} kV
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Current
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-primary-hearst-green)'
              }}>
                ~{containerCurrent} A
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: 'var(--spacing-5)',
          color: 'var(--color-text-muted)'
        }}>
          <div style={{
            fontSize: 'var(--font-size-subsection-title)',
            color: 'var(--color-primary-hearst-green)',
            marginBottom: 'var(--spacing-4)',
            fontWeight: 'var(--font-weight-semibold)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Getting Started
          </div>
          <div style={{
            fontSize: 'var(--font-size-body)',
            marginBottom: 'var(--spacing-4)',
            color: 'var(--color-text-primary)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Click on a transformer or container in the diagram to see its details.
          </div>
          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: '#F5F5F5',
            borderRadius: 'var(--radius-default)',
            border: '1px solid var(--color-primary-hearst-green)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>Tip:</strong><br/><br/>
              • <strong>Transformers</strong> (blue boxes) = reduce voltage<br/>
              • <strong>Containers</strong> (small boxes) = mining machines<br/>
              • 2 containers per transformer
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

