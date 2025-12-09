'use client'

import { use } from 'react'
import { siteConfig } from '@/lib/siteConfig'
import { PowerBlock } from '@/lib/types'
import BlockHeader from '@/components/BlockHeader'
import BlockDiagram from '@/components/BlockDiagram'
import BlockDetailPanel from '@/components/BlockDetailPanel'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BlockDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()
  const [selectedTransformerId, setSelectedTransformerId] = useState<string | undefined>()
  const [selectedContainerId, setSelectedContainerId] = useState<string | undefined>()

  const block = siteConfig.blocks.find(b => b.id === id)

  if (!block) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
        padding: 'var(--spacing-8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 'var(--spacing-4)'
      }}>
        <h1 style={{ fontSize: 'var(--font-size-page-title)' }}>Bloc non trouvé</h1>
        <button
          onClick={() => router.push('/')}
          style={{
            padding: 'var(--spacing-4) var(--spacing-6)',
            backgroundColor: 'var(--color-primary-hearst-green)',
            color: 'var(--color-text-default)',
            border: 'none',
            borderRadius: 'var(--radius-default)',
            cursor: 'pointer',
            fontWeight: 'var(--font-weight-semibold)'
          }}
        >
          Retour à l'accueil
        </button>
      </div>
    )
  }

  const handleSelectBlock = (blockId: string) => {
    router.push(`/blocks/${blockId}`)
  }

  const handleSelectTransformer = (transformerId: string) => {
    setSelectedTransformerId(transformerId)
    setSelectedContainerId(undefined)
  }

  const handleSelectContainer = (containerId: string) => {
    setSelectedContainerId(containerId)
    setSelectedTransformerId(undefined)
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)',
      padding: 'var(--spacing-8)'
    }}>
      <BlockHeader
        block={block}
        site={siteConfig}
        onSelectBlock={handleSelectBlock}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: 'var(--spacing-8)',
        marginTop: 'var(--spacing-8)'
      }}>
        <BlockDiagram
          block={block}
          selectedTransformerId={selectedTransformerId}
          selectedContainerId={selectedContainerId}
          onSelectTransformer={handleSelectTransformer}
          onSelectContainer={handleSelectContainer}
        />

        <BlockDetailPanel
          block={block}
          selectedTransformerId={selectedTransformerId}
          selectedContainerId={selectedContainerId}
        />
      </div>
    </div>
  )
}

