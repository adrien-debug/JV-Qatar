'use client'

import { Container } from '@/lib/types'
import { containerCurrent } from '@/lib/siteConfig'
import ContainerIcon from './icons/ContainerIcon'

interface ContainerNodeProps {
  container: Container
  isSelected: boolean
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}

export default function ContainerNode({
  container,
  isSelected,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick
}: ContainerNodeProps) {
  const isActive = isSelected || isHovered

  return (
    <div
      style={{
        padding: 'var(--spacing-3)',
        backgroundColor: isActive
          ? 'rgba(46, 204, 113, 0.08)'
          : 'transparent',
        borderRadius: 'var(--radius-default)',
        border: isSelected
          ? '2px solid var(--color-primary-hearst-green)'
          : isHovered
          ? '1px solid var(--color-primary-hearst-green)'
          : '1px solid #E0E0E0',
        cursor: 'pointer',
        transition: 'var(--transition-base)',
        boxShadow: 'none'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      title={`${container.name}\n${container.type}\n${container.totalPowerMW} MW total, ${container.supplyVoltageKV} kV, ~${containerCurrent} A`}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--spacing-1)'
      }}>
        <ContainerIcon
          size={32}
          color={isActive ? 'var(--color-primary-hearst-green)' : 'var(--color-text-secondary)'}
          isActive={isActive}
        />
        <div style={{
          fontSize: 'var(--font-size-caption)',
          fontWeight: 'var(--font-weight-semibold)',
          color: isActive
            ? 'var(--color-primary-hearst-green)'
            : 'var(--color-text-primary)',
          textAlign: 'center'
        }}>
          HD5
        </div>
        <div style={{
          fontSize: '9px',
          color: 'var(--color-text-muted)',
          textAlign: 'center'
        }}>
          {container.totalPowerMW} MW
        </div>
      </div>
    </div>
  )
}

