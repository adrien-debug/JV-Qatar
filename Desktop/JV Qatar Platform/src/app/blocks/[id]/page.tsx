'use client'

import { siteConfig } from '@/lib/siteConfig'
import { PowerBlock } from '@/lib/types'
import BlockHeader from '@/components/BlockHeader'
import BlockDiagram from '@/components/BlockDiagram'
import BlockDetailPanel from '@/components/BlockDetailPanel'
import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function BlockDetailPage() {
  const params = useParams()
  const id = params.id as string
  const router = useRouter()
  const [selectedTransformerId, setSelectedTransformerId] = useState<string | undefined>()
  const [selectedContainerId, setSelectedContainerId] = useState<string | undefined>()

  const block = siteConfig.blocks.find(b => b.id === id)

  if (!block) {
    return (
      <div style={{
        minHeight: 'calc(100vh - var(--structure-header-height))',
        backgroundColor: 'var(--color-bg-content)',
        color: 'var(--color-text-primary)',
        padding: 'var(--spacing-8) var(--spacing-6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 'var(--spacing-4)'
      }}>
        <h1 style={{ 
          fontSize: 'var(--font-size-page-title)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>Block not found</h1>
        <button
          onClick={() => router.push('/')}
          style={{
            padding: 'var(--spacing-4) var(--spacing-5)',
            backgroundColor: 'var(--color-primary-hearst-green)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 'var(--radius-small)',
            cursor: 'pointer',
            fontWeight: 'var(--font-weight-semibold)',
            fontSize: 'var(--font-size-body)',
            transition: 'var(--transition-base)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
        >
          Back to home
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
      padding: 'var(--spacing-5)'
    }}>
      <BlockHeader
        block={block}
        site={siteConfig}
        onSelectBlock={handleSelectBlock}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: 'var(--spacing-5)',
        marginTop: 'var(--spacing-5)'
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

