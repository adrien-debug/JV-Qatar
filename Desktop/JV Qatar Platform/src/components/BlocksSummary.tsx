'use client'

import { PowerBlock } from '@/lib/types'
import VisualBlockCard from './VisualBlockCard'

interface BlocksSummaryProps {
  blocks: PowerBlock[]
}

export default function BlocksSummary({ blocks }: BlocksSummaryProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 'var(--spacing-6)'
    }}>
      {blocks.map((block) => (
        <VisualBlockCard key={block.id} block={block} />
      ))}
    </div>
  )
}

