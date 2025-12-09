'use client'

import { Transformer } from '@/lib/types'
import { transformerLoadCurrent, transformerLoadPercentage } from '@/lib/siteConfig'
import TransformerIcon from './icons/TransformerIcon'

interface TransformerNodeProps {
  transformer: Transformer
  isSelected: boolean
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}

export default function TransformerNode({
  transformer,
  isSelected,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick
}: TransformerNodeProps) {
  const isActive = isSelected || isHovered

  return (
    <div
      style={{
        padding: 'var(--spacing-4)',
        backgroundColor: isActive
          ? 'var(--color-bg-hover)'
          : 'var(--color-bg-tertiary)',
        borderRadius: 'var(--radius-default)',
        border: isSelected
          ? '2px solid var(--color-primary-hearst-green)'
          : isHovered
          ? '2px solid var(--color-ash-grey-accent)'
          : 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
        cursor: 'pointer',
        transition: 'var(--transition-base)',
        transform: isActive ? 'scale(1.05)' : 'none',
        boxShadow: isSelected
          ? 'var(--shadow-glow-green)'
          : isHovered
          ? 'var(--shadow-md)'
          : 'none',
        textAlign: 'center',
        minWidth: '140px'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      title={`${transformer.name}\n${transformer.ratingMVA} MVA, ${transformer.primaryVoltageKV}/${transformer.secondaryVoltageKV} kV\n~3.2 MW load, ~${transformerLoadCurrent} A, ~${transformerLoadPercentage}%`}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--spacing-2)'
      }}>
        <TransformerIcon
          size={40}
          color={isActive ? 'var(--color-primary-hearst-green)' : 'var(--color-ash-grey-accent)'}
          isActive={isActive}
        />
        <div style={{
          fontSize: 'var(--font-size-caption)',
          fontWeight: 'var(--font-weight-bold)',
          color: isActive
            ? 'var(--color-primary-hearst-green)'
            : 'var(--color-text-secondary)',
          textAlign: 'center'
        }}>
          {transformer.name.split('–')[1].trim()}
        </div>
        <div style={{
          fontSize: '10px',
          color: 'var(--color-text-muted)',
          textAlign: 'center'
        }}>
          {transformer.ratingMVA} MVA
        </div>
        <div style={{
          fontSize: '10px',
          color: 'var(--color-text-muted)',
          textAlign: 'center'
        }}>
          {transformer.primaryVoltageKV}/{transformer.secondaryVoltageKV} kV
        </div>
      </div>
    </div>
  )
}

