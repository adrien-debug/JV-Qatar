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
      padding: 'var(--spacing-8)',
      backgroundColor: 'var(--color-bg-secondary)',
      borderRadius: 'var(--radius-default)',
      border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
      minHeight: '600px'
    }}>
      {/* 33 kV Feeder Line */}
      <div style={{
        marginBottom: 'var(--spacing-8)',
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
          boxShadow: '0 0 10px rgba(138, 253, 129, 0.3)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(138, 253, 129, 0.6), transparent)',
            animation: 'flow 2s linear infinite'
          }} />
        </div>
        <div style={{
          fontSize: 'var(--font-size-body)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-bold)',
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
            boxShadow: '0 0 8px var(--color-primary-hearst-green)'
          }} />
          33 kV Feeder
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-hearst-green)',
            boxShadow: '0 0 8px var(--color-primary-hearst-green)'
          }} />
        </div>
      </div>

      {/* Transformers and Containers Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--spacing-6)',
        rowGap: 'var(--spacing-10)'
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
                  : 'var(--color-ash-grey-accent)',
                transition: 'all var(--transition-base)',
                borderRadius: 'var(--radius-full)',
                boxShadow: (isHovered || isContainerHovered)
                  ? '0 0 8px var(--color-primary-hearst-green)'
                  : 'none'
              }}>
                {(isHovered || isContainerHovered) && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    backgroundColor: 'var(--color-primary-hearst-green-light)',
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

