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
          ? 'var(--color-bg-hover)'
          : 'var(--color-bg-tertiary)',
        borderRadius: 'var(--radius-small)',
        border: isSelected
          ? '2px solid var(--color-primary-hearst-green)'
          : isHovered
          ? '1px solid var(--color-ash-grey-accent)'
          : 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
        cursor: 'pointer',
        transition: 'var(--transition-base)',
        transform: isActive ? 'scale(1.02)' : 'none',
        boxShadow: isSelected
          ? 'var(--shadow-glow-green)'
          : isHovered
          ? 'var(--shadow-sm)'
          : 'none'
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
          color={isActive ? 'var(--color-primary-hearst-green)' : 'var(--color-ash-grey-accent)'}
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

