'use client'

import { SiteConfig } from '@/lib/types'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Architecture2DProps {
  site: SiteConfig
}

// Couleurs du design system (valeurs hex pour SVG)
const colors = {
  primaryGreen: '#2ECC71',
  primaryGreenLight: '#58D68D',
  ashGrey: '#E0E0E0',
  bgPrimary: '#FFFFFF',
  bgSecondary: '#F5F5F5',
  bgTertiary: '#F5F5F5',
  bgHover: 'rgba(46, 204, 113, 0.08)',
  textPrimary: '#333333',
  textSecondary: '#888888',
  textMuted: '#6b6b6b',
  textDefault: '#000000',
}

export default function Architecture2D({ site }: Architecture2DProps) {
  const router = useRouter()
  const [hoveredBlockId, setHoveredBlockId] = useState<string | null>(null)
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null)

  // Dimensions du diagramme
  const width = 1200
  const height = 1000
  const centerX = width / 2

  // Positions des éléments
  const gridY = 80
  const switchgearY = 220
  const blocksStartY = 360
  const blockSpacing = 250
  const blockWidth = 200
  const blockHeight = 150

  const handleBlockClick = (blockId: string) => {
    router.push(`/blocks/${blockId}`)
  }

  return (
    <div style={{
      padding: 'var(--spacing-5)',
      backgroundColor: 'transparent',
      borderRadius: 'var(--radius-default)',
      border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
      overflow: 'auto'
    }}>
      <svg
        width={width}
        height={height}
        style={{
          display: 'block',
          margin: '0 auto',
          backgroundColor: 'var(--color-bg-content)',
          borderRadius: 'var(--radius-default)'
        }}
      >
        {/* Définitions pour les gradients et filtres */}
        <defs>
          <linearGradient id="powerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.primaryGreen} stopOpacity="1" />
            <stop offset="100%" stopColor={colors.primaryGreenLight} stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primaryGreen} stopOpacity="0.3" />
            <stop offset="50%" stopColor={colors.primaryGreen} stopOpacity="1" />
            <stop offset="100%" stopColor={colors.primaryGreen} stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="rgba(0,0,0,0.2)"/>
          </filter>
        </defs>

        {/* Ligne de fond - Grid 132kV */}
        <g>
          <rect
            x={centerX - 200}
            y={gridY - 30}
            width={400}
            height={60}
            rx={8}
            fill={colors.bgTertiary}
            stroke={colors.primaryGreen}
            strokeWidth="3"
            filter="url(#glow)"
          />
          <text
            x={centerX}
            y={gridY + 5}
            textAnchor="middle"
            fill={colors.primaryGreen}
            fontSize="18"
            fontWeight="bold"
          >
            Kahramaa Grid
          </text>
          <text
            x={centerX}
            y={gridY + 25}
            textAnchor="middle"
            fill={colors.textSecondary}
            fontSize="14"
          >
            132 kV
          </text>
        </g>

        {/* Ligne de connexion 1 - Grid vers Switchgear */}
        <g>
          <line
            x1={centerX}
            y1={gridY + 30}
            x2={centerX}
            y2={switchgearY - 30}
            stroke={colors.primaryGreen}
            strokeWidth="4"
            strokeDasharray="5,5"
            filter="url(#glow)"
          />
          {/* Flèche */}
          <polygon
            points={`${centerX},${switchgearY - 30} ${centerX - 8},${switchgearY - 50} ${centerX + 8},${switchgearY - 50}`}
            fill={colors.primaryGreen}
          />
        </g>


        {/* Client 33kV Switchgear */}
        <g>
          <rect
            x={centerX - 200}
            y={switchgearY - 40}
            width={400}
            height={80}
            rx={8}
            fill={colors.bgTertiary}
            stroke={colors.ashGrey}
            strokeWidth="2"
            filter="url(#shadow)"
          />
          <text
            x={centerX}
            y={switchgearY - 5}
            textAnchor="middle"
            fill={colors.textPrimary}
            fontSize="16"
            fontWeight="semibold"
          >
            Client 33 kV Switchgear
          </text>
          <text
            x={centerX}
            y={switchgearY + 20}
            textAnchor="middle"
            fill={colors.textSecondary}
            fontSize="14"
          >
            ~1,750 A @ 100 MW
          </text>
        </g>

        {/* Ligne de distribution 33kV vers les blocs */}
        <g>
          <line
            x1={centerX - 500}
            y1={blocksStartY - 20}
            x2={centerX + 500}
            y2={blocksStartY - 20}
            stroke={colors.primaryGreen}
            strokeWidth="6"
            filter="url(#glow)"
          />
          <text
            x={centerX}
            y={blocksStartY - 35}
            textAnchor="middle"
            fill={colors.primaryGreen}
            fontSize="14"
            fontWeight="bold"
          >
            33 kV Distribution Bus
          </text>
        </g>

        {/* Power blocks */}
        {site.blocks.map((block, index) => {
          const blockX = centerX - (site.blocks.length - 1) * blockSpacing / 2 + index * blockSpacing
          const isHovered = hoveredBlockId === block.id
          const isSelected = selectedBlockId === block.id

          return (
            <g key={block.id}>
              {/* Ligne de connexion depuis le bus */}
              <line
                x1={blockX}
                y1={blocksStartY - 20}
                x2={blockX}
                y2={blocksStartY + blockHeight}
                stroke={isHovered || isSelected ? colors.primaryGreen : colors.ashGrey}
                strokeWidth={isHovered || isSelected ? "4" : "2"}
                strokeDasharray={isHovered || isSelected ? "none" : "5,5"}
                filter={isHovered || isSelected ? "url(#glow)" : "none"}
              />

              {/* Rectangle du bloc */}
              <g
                onClick={() => handleBlockClick(block.id)}
                onMouseEnter={() => setHoveredBlockId(block.id)}
                onMouseLeave={() => setHoveredBlockId(null)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x={blockX - blockWidth / 2}
                  y={blocksStartY}
                  width={blockWidth}
                  height={blockHeight}
                  rx={12}
                  fill={isSelected ? colors.primaryGreen : isHovered ? colors.bgHover : colors.bgTertiary}
                  stroke={isHovered || isSelected ? colors.primaryGreen : colors.ashGrey}
                  strokeWidth={isHovered || isSelected ? "3" : "2"}
                  filter={isHovered || isSelected ? "url(#glow)" : "url(#shadow)"}
                  opacity={isHovered || isSelected ? 1 : 0.9}
                />

                {/* Texte du bloc */}
                <text
                  x={blockX}
                  y={blocksStartY + 35}
                  textAnchor="middle"
                  fill={isSelected ? colors.textDefault : colors.textPrimary}
                  fontSize="18"
                  fontWeight="bold"
                >
                  {block.name}
                </text>

                <text
                  x={blockX}
                  y={blocksStartY + 60}
                  textAnchor="middle"
                  fill={isSelected ? colors.textDefault : colors.textSecondary}
                  fontSize="14"
                  fontWeight="semibold"
                >
                  {block.targetPowerMW} MW
                </text>

                <text
                  x={blockX}
                  y={blocksStartY + 85}
                  textAnchor="middle"
                  fill={isSelected ? colors.textDefault : colors.textMuted}
                  fontSize="12"
                >
                  {block.numContainers} conteneurs
                </text>

                <text
                  x={blockX}
                  y={blocksStartY + 105}
                  textAnchor="middle"
                  fill={isSelected ? colors.textDefault : colors.textMuted}
                  fontSize="12"
                >
                  {block.numTransformers} transformateurs
                </text>

                {/* Indicateur de sélection */}
                {(isHovered || isSelected) && (
                  <circle
                    cx={blockX}
                    cy={blocksStartY + blockHeight + 20}
                    r="6"
                    fill={colors.primaryGreen}
                    filter="url(#glow)"
                  />
                )}
              </g>
            </g>
          )
        })}

        {/* Légende */}
        <g>
          <rect
            x={width - 220}
            y={height - 180}
            width={200}
            height={160}
            rx={8}
            fill={colors.bgSecondary}
            stroke={colors.ashGrey}
            strokeWidth="1"
            opacity="0.95"
          />
          <text
            x={width - 120}
            y={height - 160}
            textAnchor="middle"
            fill={colors.textPrimary}
            fontSize="14"
            fontWeight="bold"
          >
            Légende
          </text>
          
          {/* Élément de légende 1 */}
          <line
            x1={width - 200}
            y1={height - 140}
            x2={width - 160}
            y2={height - 140}
            stroke={colors.primaryGreen}
            strokeWidth="4"
            strokeDasharray="5,5"
          />
          <text
            x={width - 155}
            y={height - 135}
            fill={colors.textSecondary}
            fontSize="12"
          >
            132 kV
          </text>

          {/* Élément de légende 2 */}
          <line
            x1={width - 200}
            y1={height - 115}
            x2={width - 160}
            y2={height - 115}
            stroke={colors.primaryGreen}
            strokeWidth="6"
          />
          <text
            x={width - 155}
            y={height - 110}
            fill={colors.textSecondary}
            fontSize="12"
          >
            33 kV
          </text>

          {/* Élément de légende 3 */}
          <rect
            x={width - 200}
            y={height - 90}
            width={30}
            height={20}
            rx={4}
            fill={colors.bgTertiary}
            stroke={colors.ashGrey}
            strokeWidth="1"
          />
          <text
            x={width - 155}
            y={height - 75}
            fill={colors.textSecondary}
            fontSize="12"
          >
            Bloc de puissance
          </text>

          {/* Élément de légende 4 */}
          <circle
            cx={width - 185}
            cy={height - 45}
            r="6"
            fill={colors.primaryGreen}
            filter="url(#glow)"
          />
          <text
            x={width - 155}
            y={height - 40}
            fill={colors.textSecondary}
            fontSize="12"
          >
            Sélectionné
          </text>
        </g>
      </svg>

      {/* Instructions */}
      <div style={{
        marginTop: 'var(--spacing-6)',
        padding: 'var(--spacing-4)',
        backgroundColor: '#F5F5F5',
        borderRadius: 'var(--radius-small)',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: 'var(--font-size-body)',
          color: 'var(--color-text-secondary)',
          margin: 0
        }}>
          💡 Cliquez sur un bloc pour voir les détails • Survolez pour mettre en évidence
        </p>
      </div>
    </div>
  )
}
