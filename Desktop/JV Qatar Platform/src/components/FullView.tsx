'use client'

import { SiteConfig } from '@/lib/types'
import { useState } from 'react'
import FullViewMenu from './FullViewMenu'

interface FullViewProps {
  site: SiteConfig
}

export default function FullView({ site }: FullViewProps) {
  const [selectedElement, setSelectedElement] = useState<{ type: 'transformer' | 'container' | 'block', id: string } | null>(null)
  const [hoveredElement, setHoveredElement] = useState<{ type: 'transformer' | 'container' | 'block', id: string } | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Dimensions du plan d'implantation
  const svgWidth = 2000
  const svgHeight = 1600
  const scale = 1 // Échelle (1 unité = 1 pixel, ajustable)
  
  // Position centrale
  const centerX = svgWidth / 2
  const centerY = svgHeight / 2
  
  // Dimensions des éléments
  const blockSize = 200 // Taille d'un bloc
  const transformerSize = 40 // Taille d'un transformateur
  const containerSize = 30 // Taille d'un conteneur
  const spacing = 100 // Espacement entre les blocs
  
  // Position des 4 blocs en grille 2x2
  const getBlockPosition = (blockIndex: number) => {
    const row = Math.floor(blockIndex / 2)
    const col = blockIndex % 2
    const offsetX = (col - 0.5) * (blockSize + spacing)
    const offsetY = (row - 0.5) * (blockSize + spacing)
    return {
      x: centerX + offsetX,
      y: centerY + offsetY
    }
  }

  // Position des transformateurs autour d'un bloc
  const getTransformerPosition = (blockPos: { x: number, y: number }, txIndex: number, totalTx: number) => {
    const angle = (txIndex / totalTx) * 2 * Math.PI
    const radius = blockSize / 2 + transformerSize + 20
    return {
      x: blockPos.x + Math.cos(angle) * radius,
      y: blockPos.y + Math.sin(angle) * radius
    }
  }

  // Position des conteneurs autour d'un transformateur
  const getContainerPosition = (txPos: { x: number, y: number }, containerIndex: number, totalContainers: number) => {
    const angle = (containerIndex / totalContainers) * 2 * Math.PI
    const radius = transformerSize / 2 + containerSize + 10
    return {
      x: txPos.x + Math.cos(angle) * radius,
      y: txPos.y + Math.sin(angle) * radius
    }
  }

  return (
    <div style={{
      width: '100%',
      minHeight: 'calc(100vh - var(--structure-header-height))',
      backgroundColor: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)',
      padding: 'var(--spacing-8) var(--spacing-6)',
      fontFamily: 'var(--font-family-primary)',
      overflow: 'auto'
    }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>

      {/* Header */}
      <div style={{
        marginBottom: 'var(--spacing-8)',
        paddingBottom: 'var(--spacing-6)',
        borderBottom: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
      }}>
        <h1 style={{
          fontSize: 'var(--font-size-display)',
          lineHeight: 'var(--line-height-display)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-3)',
          letterSpacing: 'var(--letter-spacing-tight)'
        }}>
          Plan d'Implémentation de la Ferme
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body-minor)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-normal)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          Vue de dessus (top-down) montrant la disposition spatiale des blocs, transformateurs et conteneurs
        </p>
      </div>

      {/* Plan d'implantation SVG */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 'var(--spacing-5)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-default)',
        border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
        overflow: 'auto'
      }}>
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          style={{
            display: 'block',
            backgroundColor: '#FAFAFA',
            border: '1px solid #E0E0E0',
            borderRadius: 'var(--radius-default)'
          }}
        >
          <defs>
            {/* Grille de fond */}
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#E0E0E0" strokeWidth="0.5"/>
            </pattern>
            
            {/* Filtres */}
            <filter id="shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
              <feOffset dx="0" dy="2" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Grille de fond */}
          <rect width={svgWidth} height={svgHeight} fill="url(#grid)" />

          {/* Légende des axes */}
          <g>
            {/* Axe X */}
            <line x1="50" y1={svgHeight - 50} x2={svgWidth - 50} y2={svgHeight - 50} stroke="#666" strokeWidth="2" />
            <text x={svgWidth / 2} y={svgHeight - 20} fill="#666" fontSize="14" fontWeight="600" textAnchor="middle">
              Est → Ouest
            </text>
            
            {/* Axe Y */}
            <line x1="50" y1="50" x2="50" y2={svgHeight - 50} stroke="#666" strokeWidth="2" />
            <text x="20" y={svgHeight / 2} fill="#666" fontSize="14" fontWeight="600" textAnchor="middle" transform={`rotate(-90, 20, ${svgHeight / 2})`}>
              Nord → Sud
            </text>
          </g>

          {/* Blocs, Transformateurs et Conteneurs */}
          {site.blocks.map((block, blockIndex) => {
            const blockPos = getBlockPosition(blockIndex)
            
            return (
              <g key={block.id}>
                {/* Bloc */}
                <rect
                  x={blockPos.x - blockSize / 2}
                  y={blockPos.y - blockSize / 2}
                  width={blockSize}
                  height={blockSize}
                  fill={hoveredElement?.id === block.id ? 'rgba(46, 204, 113, 0.2)' : 'rgba(46, 204, 113, 0.1)'}
                  stroke={hoveredElement?.id === block.id ? '#2ECC71' : '#58D68D'}
                  strokeWidth={hoveredElement?.id === block.id ? '3' : '2'}
                  rx="8"
                  filter="url(#shadow)"
                  onMouseEnter={() => setHoveredElement({ type: 'block', id: block.id })}
                  onMouseLeave={() => setHoveredElement(null)}
                  onClick={() => setSelectedElement({ type: 'block', id: block.id })}
                  style={{ cursor: 'pointer' }}
                />
                <text
                  x={blockPos.x}
                  y={blockPos.y - blockSize / 2 - 10}
                  fill="#2ECC71"
                  fontSize="16"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  {block.name}
                </text>
                <text
                  x={blockPos.x}
                  y={blockPos.y}
                  fill="#2ECC71"
                  fontSize="12"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {block.targetPowerMW} MW
                </text>

                {/* Transformateurs */}
                {block.transformers.map((transformer, txIndex) => {
                  const txPos = getTransformerPosition(blockPos, txIndex, block.transformers.length)
                  const associatedContainers = block.containers.filter(c => c.transformerId === transformer.id)
                  
                  return (
                    <g key={transformer.id}>
                      {/* Ligne Bloc → Transformateur */}
                      <line
                        x1={blockPos.x}
                        y1={blockPos.y}
                        x2={txPos.x}
                        y2={txPos.y}
                        stroke="#2ECC71"
                        strokeWidth="2"
                        opacity="0.3"
                        strokeDasharray="4,2"
                      />
                      
                      {/* Transformateur */}
                      <circle
                        cx={txPos.x}
                        cy={txPos.y}
                        r={transformerSize / 2}
                        fill={hoveredElement?.id === transformer.id ? 'rgba(46, 204, 113, 0.3)' : 'rgba(46, 204, 113, 0.15)'}
                        stroke={hoveredElement?.id === transformer.id ? '#2ECC71' : '#58D68D'}
                        strokeWidth={hoveredElement?.id === transformer.id ? '3' : '2'}
                        filter="url(#shadow)"
                        onMouseEnter={() => setHoveredElement({ type: 'transformer', id: transformer.id })}
                        onMouseLeave={() => setHoveredElement(null)}
                        onClick={() => setSelectedElement({ type: 'transformer', id: transformer.id })}
                        style={{ cursor: 'pointer' }}
                      />
                      <text
                        x={txPos.x}
                        y={txPos.y + 4}
                        fill="#2ECC71"
                        fontSize="10"
                        fontWeight="700"
                        textAnchor="middle"
                      >
                        TX{txIndex + 1}
                      </text>

                      {/* Conteneurs */}
                      {associatedContainers.map((container, containerIndex) => {
                        const containerPos = getContainerPosition(txPos, containerIndex, associatedContainers.length)
                        
                        return (
                          <g key={container.id}>
                            {/* Ligne Transformateur → Conteneur */}
                            <line
                              x1={txPos.x}
                              y1={txPos.y}
                              x2={containerPos.x}
                              y2={containerPos.y}
                              stroke="#58D68D"
                              strokeWidth="1"
                              opacity="0.2"
                              strokeDasharray="2,2"
                            />
                            
                            {/* Conteneur */}
                            <rect
                              x={containerPos.x - containerSize / 2}
                              y={containerPos.y - containerSize / 2}
                              width={containerSize}
                              height={containerSize}
                              fill={hoveredElement?.id === container.id ? 'rgba(46, 204, 113, 0.25)' : 'rgba(46, 204, 113, 0.1)'}
                              stroke={hoveredElement?.id === container.id ? '#2ECC71' : '#58D68D'}
                              strokeWidth={hoveredElement?.id === container.id ? '2' : '1'}
                              rx="4"
                              filter="url(#shadow)"
                              onMouseEnter={() => setHoveredElement({ type: 'container', id: container.id })}
                              onMouseLeave={() => setHoveredElement(null)}
                              onClick={() => setSelectedElement({ type: 'container', id: container.id })}
                              style={{ cursor: 'pointer' }}
                            />
                            <text
                              x={containerPos.x}
                              y={containerPos.y + 3}
                              fill="#2ECC71"
                              fontSize="8"
                              fontWeight="600"
                              textAnchor="middle"
                            >
                              C{containerIndex + 1}
                            </text>
                          </g>
                        )
                      })}
                    </g>
                  )
                })}
              </g>
            )
          })}

          {/* Légende */}
          <g transform={`translate(${svgWidth - 250}, 50)`}>
            <rect x="0" y="0" width="200" height="180" fill="white" stroke="#E0E0E0" strokeWidth="1" rx="8" filter="url(#shadow)" />
            <text x="100" y="25" fill="#333" fontSize="14" fontWeight="700" textAnchor="middle">Légende</text>
            
            {/* Bloc */}
            <rect x="20" y="40" width="30" height="30" fill="rgba(46, 204, 113, 0.1)" stroke="#2ECC71" strokeWidth="2" rx="4" />
            <text x="60" y="58" fill="#333" fontSize="12">Bloc</text>
            
            {/* Transformateur */}
            <circle cx="35" cy="85" r="8" fill="rgba(46, 204, 113, 0.15)" stroke="#2ECC71" strokeWidth="2" />
            <text x="60" y="90" fill="#333" fontSize="12">Transformateur</text>
            
            {/* Conteneur */}
            <rect x="20" y="110" width="20" height="20" fill="rgba(46, 204, 113, 0.1)" stroke="#2ECC71" strokeWidth="1" rx="3" />
            <text x="60" y="125" fill="#333" fontSize="12">Conteneur</text>
            
            {/* Échelle */}
            <line x1="20" y1="150" x2="80" y2="150" stroke="#666" strokeWidth="2" />
            <line x1="20" y1="145" x2="20" y2="155" stroke="#666" strokeWidth="2" />
            <line x1="80" y1="145" x2="80" y2="155" stroke="#666" strokeWidth="2" />
            <text x="100" y="155" fill="#666" fontSize="10">60m</text>
          </g>
        </svg>
      </div>

      {/* Bouton menu */}
      <button
        onClick={() => setIsMenuOpen(true)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '64px',
          height: '64px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.95) 0%, rgba(88, 214, 141, 0.95) 100%)',
          border: 'none',
          boxShadow: '0 8px 24px rgba(46, 204, 113, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          color: '#FFFFFF',
          fontSize: '28px'
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Modal détails */}
      {selectedElement && (
        <div
          onClick={() => setSelectedElement(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '32px',
              maxWidth: '500px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            {selectedElement.type === 'block' && (() => {
              const block = site.blocks.find(b => b.id === selectedElement.id)
              if (!block) return null
              return (
                <div>
                  <h3 style={{ fontSize: '20px', color: '#2ECC71', fontWeight: 700, marginBottom: '16px' }}>
                    {block.name}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Puissance Cible</div>
                      <div style={{ fontSize: '16px', color: '#2ECC71', fontWeight: 600 }}>{block.targetPowerMW} MW</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Transformateurs</div>
                      <div style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>{block.numTransformers}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Conteneurs</div>
                      <div style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>{block.numContainers}</div>
                    </div>
                  </div>
                </div>
              )
            })()}
            {selectedElement.type === 'transformer' && (() => {
              const transformer = site.blocks.flatMap(b => b.transformers).find(t => t.id === selectedElement.id)
              if (!transformer) return null
              return (
                <div>
                  <h3 style={{ fontSize: '20px', color: '#2ECC71', fontWeight: 700, marginBottom: '16px' }}>
                    {transformer.name}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Puissance</div>
                      <div style={{ fontSize: '16px', color: '#2ECC71', fontWeight: 600 }}>{transformer.ratingMVA} MVA</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Tension Primaire</div>
                      <div style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>{transformer.primaryVoltageKV} kV</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Tension Secondaire</div>
                      <div style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>{transformer.secondaryVoltageKV} kV</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Conteneurs Alimentés</div>
                      <div style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>{transformer.containersServed.length}</div>
                    </div>
                  </div>
                </div>
              )
            })()}
            {selectedElement.type === 'container' && (() => {
              const container = site.blocks.flatMap(b => b.containers).find(c => c.id === selectedElement.id)
              if (!container) return null
              return (
                <div>
                  <h3 style={{ fontSize: '20px', color: '#2ECC71', fontWeight: 700, marginBottom: '16px' }}>
                    {container.name}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Type</div>
                      <div style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>{container.type}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Puissance Totale</div>
                      <div style={{ fontSize: '16px', color: '#2ECC71', fontWeight: 600 }}>{container.totalPowerMW} MW</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Puissance Nominale</div>
                      <div style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>{container.nominalPowerMW} MW</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Puissance Refroidissement</div>
                      <div style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>{container.coolingPowerMW} MW</div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      <FullViewMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  )
}
