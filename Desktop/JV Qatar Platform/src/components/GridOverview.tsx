'use client'

import { SiteConfig } from '@/lib/types'
import Link from 'next/link'
import { useState } from 'react'
import { siteCurrent33kV } from '@/lib/siteConfig'
import GridIcon from './icons/GridIcon'
import SubstationIcon from './icons/SubstationIcon'

interface GridOverviewProps {
  site: SiteConfig
}

export default function GridOverview({ site }: GridOverviewProps) {
  const [hoveredBlockId, setHoveredBlockId] = useState<string | null>(null)

  return (
    <div style={{
      padding: 'var(--spacing-8)',
      backgroundColor: 'var(--color-bg-secondary)',
      borderRadius: 'var(--radius-default)',
      border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
    }}>
      {/* Diagram Flow */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-6)',
        alignItems: 'center'
      }}>
        {/* Kahramaa Grid */}
        <div
          style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-tertiary)',
            borderRadius: 'var(--radius-default)',
            border: '2px solid var(--color-primary-hearst-green)',
            minWidth: '300px',
            textAlign: 'center',
            position: 'relative',
            boxShadow: 'var(--shadow-glow-green)',
            transition: 'var(--transition-base)'
          }}
          title="132 kV transmission level (Kahramaa grid)"
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-3)',
            marginBottom: 'var(--spacing-3)'
          }}>
            <GridIcon size={32} color="var(--color-primary-hearst-green)" />
            <div style={{
              fontSize: 'var(--font-size-subsection-title)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-primary-hearst-green)'
            }}>
              Kahramaa Grid
            </div>
          </div>
          <div style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)',
            fontWeight: 'var(--font-weight-semibold)'
          }}>
            132 kV
          </div>
        </div>

        {/* Arrow Down with Animation */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <div style={{
            width: '3px',
            height: '30px',
            backgroundColor: 'var(--color-primary-hearst-green)',
            borderRadius: 'var(--radius-full)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              backgroundColor: 'var(--color-primary-hearst-green-light)',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
          </div>
          <div style={{
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '8px solid var(--color-primary-hearst-green)'
          }} />
        </div>

        {/* Substation */}
        <div
          style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-tertiary)',
            borderRadius: 'var(--radius-default)',
            border: '2px solid var(--color-ash-grey-accent)',
            minWidth: '300px',
            textAlign: 'center',
            transition: 'var(--transition-base)',
            position: 'relative'
          }}
          title="132/33 kV transformation"
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-3)',
            marginBottom: 'var(--spacing-3)'
          }}>
            <SubstationIcon size={32} color="var(--color-ash-grey-accent)" />
            <div style={{
              fontSize: 'var(--font-size-subsection-title)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-text-primary)'
            }}>
              {site.gridConnection.substationName}
            </div>
          </div>
          <div style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)',
            fontWeight: 'var(--font-weight-semibold)'
          }}>
            132/33 kV
          </div>
        </div>

        {/* Arrow Down with Animation */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <div style={{
            width: '3px',
            height: '30px',
            backgroundColor: 'var(--color-primary-hearst-green)',
            borderRadius: 'var(--radius-full)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              backgroundColor: 'var(--color-primary-hearst-green-light)',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
          </div>
          <div style={{
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '8px solid var(--color-primary-hearst-green)'
          }} />
        </div>

        {/* Client Switchgear */}
        <div
          style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-tertiary)',
            borderRadius: 'var(--radius-default)',
            border: '2px solid var(--color-ash-grey-accent)',
            minWidth: '300px',
            textAlign: 'center'
          }}
          title={`Internal distribution, ~${siteCurrent33kV} A at 100 MW total`}
        >
          <div style={{
            fontSize: 'var(--font-size-subsection-title)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--spacing-2)'
          }}>
            Client 33 kV Switchgear
          </div>
          <div style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)'
          }}>
            33 kV (~1,750 A)
          </div>
        </div>

        {/* Arrow Down with Animation */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <div style={{
            width: '3px',
            height: '30px',
            backgroundColor: 'var(--color-primary-hearst-green)',
            borderRadius: 'var(--radius-full)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              backgroundColor: 'var(--color-primary-hearst-green-light)',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
          </div>
          <div style={{
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '8px solid var(--color-primary-hearst-green)'
          }} />
        </div>

        {/* Blocks Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--spacing-6)',
          width: '100%',
          maxWidth: '1200px'
        }}>
          {site.blocks.map((block) => (
            <Link
              key={block.id}
              href={`/blocks/${block.id}`}
              onMouseEnter={() => setHoveredBlockId(block.id)}
              onMouseLeave={() => setHoveredBlockId(null)}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: hoveredBlockId === block.id
                    ? 'var(--color-bg-hover)'
                    : 'var(--color-bg-tertiary)',
                  borderRadius: 'var(--radius-default)',
                  border: hoveredBlockId === block.id
                    ? '2px solid var(--color-primary-hearst-green)'
                    : 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                  transform: hoveredBlockId === block.id ? 'translateY(-6px) scale(1.02)' : 'none',
                  boxShadow: hoveredBlockId === block.id
                    ? 'var(--shadow-glow-green)'
                    : 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background gradient on hover */}
                {hoveredBlockId === block.id && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(138, 253, 129, 0.1) 0%, rgba(138, 253, 129, 0.05) 100%)',
                    zIndex: 0
                  }} />
                )}
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: 'var(--font-size-subsection-title)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: hoveredBlockId === block.id
                      ? 'var(--color-primary-hearst-green)'
                      : 'var(--color-text-primary)',
                    marginBottom: 'var(--spacing-2)',
                    transition: 'color var(--transition-base)'
                  }}>
                    {block.name}
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-body)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--spacing-1)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    {block.targetPowerMW} MW
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-caption)',
                    color: 'var(--color-text-muted)'
                  }}>
                    ~450 A @ 33 kV
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

