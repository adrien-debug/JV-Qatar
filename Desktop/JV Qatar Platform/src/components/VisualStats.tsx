'use client'

import { SiteConfig } from '@/lib/types'

interface VisualStatsProps {
  site: SiteConfig
}

export default function VisualStats({ site }: VisualStatsProps) {
  const totalContainers = site.blocks.reduce((sum, block) => sum + block.numContainers, 0)
  const totalTransformers = site.blocks.reduce((sum, block) => sum + block.numTransformers, 0)
  const maxPower = site.gridConnection.maxContractPowerMW
  const usagePercentage = (site.totalPowerMW / maxPower) * 100

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--spacing-6)'
    }}>
      {/* Graphique de Puissance */}
      <div>
        <h3 style={{
          fontSize: 'var(--font-size-subsection-title)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--spacing-4)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
          Power Usage
        </h3>
        <div style={{
          position: 'relative',
          height: '200px',
          display: 'flex',
          alignItems: 'flex-end',
          gap: 'var(--spacing-2)',
        }}>
          {/* Barre de capacité max */}
          <div style={{
            flex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#E0E0E0',
              borderRadius: 'var(--radius-small)',
              opacity: 0.3,
              position: 'absolute',
              bottom: 0
            }} />
            <div style={{
              width: '100%',
              height: `${usagePercentage}%`,
              background: 'linear-gradient(180deg, var(--color-primary-hearst-green), var(--color-primary-hearst-green-light))',
              borderRadius: 'var(--radius-small)',
              position: 'relative',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: 'var(--font-size-body)'
            }}>
              {site.totalPowerMW} MW
            </div>
            <div style={{
              position: 'absolute',
              top: '-25px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 'var(--font-size-caption)',
              color: 'var(--color-text-secondary)',
              whiteSpace: 'nowrap'
            }}>
              {usagePercentage.toFixed(1)}%
            </div>
          </div>
          <div style={{
            flex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#E0E0E0',
              borderRadius: 'var(--radius-small)',
              opacity: 0.3,
              position: 'absolute',
              bottom: 0
            }} />
            <div style={{
              width: '100%',
              height: `${100 - usagePercentage}%`,
              backgroundColor: 'transparent',
              borderRadius: 'var(--radius-small)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: 'var(--spacing-2)',
              fontSize: 'var(--font-size-caption)',
              color: 'var(--color-text-muted)'
            }}>
              Available
            </div>
          </div>
        </div>
        <div style={{
          marginTop: 'var(--spacing-4)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 'var(--font-size-caption)',
          color: 'var(--color-text-secondary)'
        }}>
          <span>Used: {site.totalPowerMW} MW</span>
          <span>Max: {maxPower} MW</span>
        </div>
      </div>

      {/* Graphique de Répartition par Bloc */}
      <div>
        <h3 style={{
          fontSize: 'var(--font-size-subsection-title)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--spacing-4)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
          Distribution by Block
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-3)',
          height: '160px',
          justifyContent: 'space-between'
        }}>
          {site.blocks.map((block, index) => {
            const percentage = (block.targetPowerMW / site.totalPowerMW) * 100
            const colors = [
              'var(--color-primary-hearst-green)',
              'var(--color-secondary-info)',
              'var(--color-secondary-accent)',
              'var(--color-secondary-warning)'
            ]
            return (
              <div key={block.id} style={{ position: 'relative' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-3)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: colors[index % colors.length],
                    boxShadow: `0 0 8px ${colors[index % colors.length]}`
                  }} />
                  <span style={{
                    fontSize: 'var(--font-size-body-minor)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 'var(--font-weight-semibold)',
                    minWidth: '80px'
                  }}>
                    {block.name}
                  </span>
                  <span style={{
                    fontSize: 'var(--font-size-body-minor)',
                    color: 'var(--color-text-secondary)'
                  }}>
                    {block.targetPowerMW} MW
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '24px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: 'var(--radius-full)',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    width: `${percentage}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${colors[index % colors.length]}, ${colors[index % colors.length]}dd)`,
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 1s ease-out',
                    boxShadow: `0 0 10px ${colors[index % colors.length]}80`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: 'var(--spacing-2)',
                    color: '#FFFFFF',
                    fontSize: 'var(--font-size-caption)',
                    fontWeight: 'var(--font-weight-bold)'
                  }}>
                    {percentage.toFixed(1)}%
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Circular Chart Containers/Transformers */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h3 style={{
          fontSize: 'var(--font-size-subsection-title)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--spacing-4)',
          fontWeight: 'var(--font-weight-semibold)',
          width: '100%',
          textAlign: 'center'
        }}>
          Equipment
        </h3>
        <div style={{
          position: 'relative',
          width: '140px',
          height: '140px',
          marginBottom: 'var(--spacing-4)'
        }}>
          {/* SVG Circle Chart */}
          <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="70"
              cy="70"
              r="55"
              fill="none"
              stroke="#F5F5F5"
              strokeWidth="20"
            />
            <circle
              cx="90"
              cy="90"
              r="70"
              fill="none"
              stroke="var(--color-primary-hearst-green)"
              strokeWidth="20"
              strokeDasharray={`${(totalContainers / (totalContainers + totalTransformers)) * 345.6} 345.6`}
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0 0 8px var(--color-primary-hearst-green))'
              }}
            />
            <circle
              cx="70"
              cy="70"
              r="55"
              fill="none"
              stroke="var(--color-secondary-info)"
              strokeWidth="20"
              strokeDasharray={`${(totalTransformers / (totalContainers + totalTransformers)) * 345.6} 345.6`}
              strokeDashoffset={`-${(totalContainers / (totalContainers + totalTransformers)) * 345.6}`}
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0 0 8px var(--color-secondary-info))'
              }}
            />
          </svg>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              {totalContainers + totalTransformers}
            </div>
            <div style={{
              fontSize: 'var(--font-size-caption)',
              color: 'var(--color-text-secondary)'
            }}>
              Total
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-6)',
          width: '100%',
          justifyContent: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary-hearst-green)',
              boxShadow: '0 0 8px var(--color-primary-hearst-green)'
            }} />
            <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-secondary)' }}>
              {totalContainers} Containers
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-secondary-info)',
              boxShadow: '0 0 8px var(--color-secondary-info)'
            }} />
            <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-secondary)' }}>
              {totalTransformers} Transformers
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
