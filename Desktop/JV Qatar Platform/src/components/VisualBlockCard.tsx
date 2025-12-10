'use client'

import { PowerBlock } from '@/lib/types'
import Link from 'next/link'
import { useState } from 'react'
import ContainerIcon from '@/components/icons/ContainerIcon'
import TransformerIcon from '@/components/icons/TransformerIcon'

interface VisualBlockCardProps {
  block: PowerBlock
}

export default function VisualBlockCard({ block }: VisualBlockCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const containerPercentage = (block.numContainers / 16) * 100
  const transformerPercentage = (block.numTransformers / 8) * 100

  return (
    <Link
      href={`/blocks/${block.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background gradient on hover */}
        {isHovered && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(46, 204, 113, 0.05)',
            zIndex: 0
          }} />
        )}

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-4)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-subsection-title)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-primary-hearst-green)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)'
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-hearst-green)',
                boxShadow: 'none',
                animation: isHovered ? 'pulse 2s ease-in-out infinite' : 'none'
              }} />
              {block.name}
            </div>
            <div style={{
              fontSize: 'var(--font-size-section-title)',
              color: 'var(--color-primary-hearst-green)',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              {block.targetPowerMW} MW
            </div>
          </div>

          {/* Visual Bars */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-3)',
            marginBottom: 'var(--spacing-4)',
          }}>
            {/* Conteneurs Bar */}
            <div style={{
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--spacing-2)',
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)'
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)'
                }}>
                  <ContainerIcon size={16} color="var(--color-text-secondary)" />
                  Containers
                </span>
                <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                  {block.numContainers} / 16
                </span>
              </div>
              <div style={{
                width: '100%',
                height: '28px',
                backgroundColor: '#F5F5F5',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  width: `${containerPercentage}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--color-primary-hearst-green), var(--color-primary-hearst-green-light))',
                  borderRadius: 'var(--radius-full)',
                  transition: 'width 0.8s ease-out',
                  boxShadow: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: 'var(--spacing-2)',
                  color: '#FFFFFF',
                  fontSize: 'var(--font-size-caption)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {containerPercentage.toFixed(0)}%
                </div>
              </div>
            </div>

            {/* Transformateurs Bar */}
            <div style={{
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--spacing-2)',
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)'
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)'
                }}>
                  <TransformerIcon size={16} color="var(--color-text-secondary)" />
                  Transformers
                </span>
                <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                  {block.numTransformers} / 8
                </span>
              </div>
              <div style={{
                width: '100%',
                height: '28px',
                backgroundColor: '#F5F5F5',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  width: `${transformerPercentage}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--color-secondary-info), var(--color-secondary-info-dark))',
                  borderRadius: 'var(--radius-full)',
                  transition: 'width 0.8s ease-out',
                  boxShadow: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: 'var(--spacing-2)',
                  color: '#FFFFFF',
                  fontSize: 'var(--font-size-caption)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {transformerPercentage.toFixed(0)}%
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--spacing-3)',
            marginBottom: 'var(--spacing-4)',
            padding: 'var(--spacing-4)',
            backgroundColor: '#F5F5F5',
            borderRadius: 'var(--radius-small)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {block.numContainers}
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)'
              }}>
                Conteneurs
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-secondary-info)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {block.numTransformers}
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)'
              }}>
                Transformateurs
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div style={{
            padding: 'var(--spacing-3)',
            backgroundColor: isHovered ? 'var(--color-primary-hearst-green)' : '#F5F5F5',
            color: isHovered ? '#FFFFFF' : 'var(--color-text-primary)',
            borderRadius: 'var(--radius-small)',
            textAlign: 'center',
            fontSize: 'var(--font-size-body-minor)',
            fontWeight: 'var(--font-weight-semibold)',
            transition: 'all var(--transition-base)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-2)'
          }}>
            View Details
            <span style={{ transform: isHovered ? 'translateX(4px)' : 'none', transition: 'transform var(--transition-base)' }}>
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
