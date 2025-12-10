'use client'

import { PowerBlock } from '@/lib/types'
import TransformerNode from './TransformerNode'
import ContainerNode from './ContainerNode'
import { useState } from 'react'

interface BlockDiagramProps {
  block: PowerBlock
  selectedTransformerId?: string
  selectedContainerId?: string
  onSelectTransformer: (id: string) => void
  onSelectContainer: (id: string) => void
}

export default function BlockDiagram({
  block,
  selectedTransformerId,
  selectedContainerId,
  onSelectTransformer,
  onSelectContainer
}: BlockDiagramProps) {
  const [hoveredTransformerId, setHoveredTransformerId] = useState<string | null>(null)
  const [hoveredContainerId, setHoveredContainerId] = useState<string | null>(null)

  return (
    <div style={{
      padding: 'var(--spacing-5)',
      backgroundColor: 'transparent',
      borderRadius: 'var(--radius-default)',
      border: '1px solid #E0E0E0',
      minHeight: '600px'
    }}>
      {/* Légende Explicative */}
      <div style={{
        marginBottom: 'var(--spacing-5)',
        padding: 'var(--spacing-4)',
        backgroundColor: 'transparent',
        borderRadius: 'var(--radius-default)',
        border: '1px solid #E0E0E0',
        boxShadow: 'none'
      }}>
        <h3 style={{
          fontSize: 'var(--font-size-subsection-title)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-4)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          Diagram Legend
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 'var(--spacing-4)',
          fontSize: 'var(--font-size-body-minor)',
          color: 'var(--color-text-primary)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          <div>
            <strong style={{ color: 'var(--color-text-primary)' }}>Green Line:</strong><br/>
            Grid electricity
          </div>
          <div>
            <strong style={{ color: 'var(--color-text-primary)' }}>Blue Boxes:</strong><br/>
            Transformers
          </div>
          <div>
            <strong style={{ color: 'var(--color-text-primary)' }}>Small Boxes:</strong><br/>
            Containers (2 per transformer)
          </div>
          <div>
            <strong style={{ color: 'var(--color-text-primary)' }}>Vertical Lines:</strong><br/>
            Electrical cables
          </div>
        </div>
        <div style={{
          marginTop: 'var(--spacing-4)',
          padding: 'var(--spacing-3)',
          backgroundColor: '#F5F5F5',
          borderRadius: 'var(--radius-small)',
          fontSize: 'var(--font-size-body-minor)',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-primary-hearst-green)'
        }}>
          <strong style={{ color: 'var(--color-text-primary)' }}>Tip:</strong> Hover or click on an element to see details
        </div>
      </div>

      {/* 33 kV Feeder Line */}
      <div style={{
        marginBottom: 'var(--spacing-5)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          height: '4px',
          backgroundColor: 'var(--color-primary-hearst-green)',
          borderRadius: 'var(--radius-full)',
          marginBottom: 'var(--spacing-3)',
          position: 'relative',
          overflow: 'hidden',
            boxShadow: 'none'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(46, 204, 113, 0.3), transparent)',
            animation: 'flow 2s linear infinite'
          }} />
        </div>
        <div style={{
          fontSize: 'var(--font-size-body)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-semibold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--spacing-2)'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-hearst-green)',
            boxShadow: 'none'
          }} />
          Grid Electricity
          <span style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)',
            fontWeight: 'normal',
            marginLeft: 'var(--spacing-2)'
          }}>
            33 kV
          </span>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-hearst-green)',
            boxShadow: 'none'
          }} />
        </div>
      </div>

      {/* Transformers and Containers Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--spacing-6)',
        rowGap: 'var(--spacing-6)'
      }}>
        {block.transformers.map((transformer) => {
          const isHovered = hoveredTransformerId === transformer.id || selectedTransformerId === transformer.id
          const containers = block.containers.filter(c => c.transformerId === transformer.id)
          const isContainerHovered = containers.some(c => 
            hoveredContainerId === c.id || selectedContainerId === c.id
          )

          return (
            <div
              key={transformer.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-4)'
              }}
            >
              {/* Transformer */}
              <TransformerNode
                transformer={transformer}
                isSelected={selectedTransformerId === transformer.id}
                isHovered={isHovered || isContainerHovered}
                onMouseEnter={() => setHoveredTransformerId(transformer.id)}
                onMouseLeave={() => setHoveredTransformerId(null)}
                onClick={() => onSelectTransformer(transformer.id)}
              />

              {/* Connection Line */}
              <div style={{
                position: 'relative',
                width: '3px',
                height: '40px',
                backgroundColor: isHovered || isContainerHovered
                  ? 'var(--color-primary-hearst-green)'
                  : '#E0E0E0',
                transition: 'all var(--transition-base)',
                borderRadius: 'var(--radius-full)',
                boxShadow: (isHovered || isContainerHovered)
                  ? 'none'
                  : 'none'
              }}>
                {(isHovered || isContainerHovered) && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderRadius: 'var(--radius-full)',
                    animation: 'pulse 1.5s ease-in-out infinite'
                  }} />
                )}
              </div>

              {/* Containers */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-3)',
                width: '100%'
              }}>
                {containers.map((container) => (
                  <ContainerNode
                    key={container.id}
                    container={container}
                    isSelected={selectedContainerId === container.id}
                    isHovered={hoveredContainerId === container.id || 
                               (hoveredTransformerId === transformer.id && !hoveredContainerId)}
                    onMouseEnter={() => setHoveredContainerId(container.id)}
                    onMouseLeave={() => setHoveredContainerId(null)}
                    onClick={() => onSelectContainer(container.id)}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

