'use client'

import { siteConfig } from '@/lib/siteConfig'
import Link from 'next/link'
import { useState } from 'react'

// Dimensions typiques pour Bitmain ANTSPACE HD5 (Hydro)
const containerDimensions = {
  length: 12.2, // mètres
  width: 2.9,  // mètres
  height: 2.9, // mètres
  weight: 14000, // kg
  volume: 103, // m³
}

export default function ConteneursPage() {
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null)

  const totalContainers = siteConfig.blocks.reduce((sum, block) => sum + block.numContainers, 0)
  const containersPerBlock = siteConfig.blocks[0]?.numContainers || 16

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)',
      padding: 'var(--spacing-8)'
    }}>
      {/* Header */}
      <header style={{
        marginBottom: 'var(--spacing-10)',
        paddingBottom: 'var(--spacing-8)',
        borderBottom: '2px solid var(--color-ash-grey-accent)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '4px',
          background: 'var(--gradient-primary)',
          borderRadius: 'var(--radius-full)'
        }} />
        <h1 style={{
          fontSize: 'var(--font-size-display)',
          lineHeight: 'var(--line-height-display)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-bold)',
          marginBottom: 'var(--spacing-3)',
          textShadow: '0 0 20px rgba(138, 253, 129, 0.3)',
          letterSpacing: 'var(--letter-spacing-tight)'
        }}>
          Spécifications des Conteneurs
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          Détails complets sur les conteneurs de minage et leur répartition
        </p>
      </header>

      {/* Statistiques Globales */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-6)',
          marginBottom: 'var(--spacing-8)'
        }}>
          <div style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--color-primary-hearst-green)20, transparent 70%)',
              filter: 'blur(20px)'
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: 'var(--font-size-display)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-bold)',
                marginBottom: 'var(--spacing-2)',
                textShadow: '0 0 20px rgba(138, 253, 129, 0.5)'
              }}>
                {totalContainers}
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                Conteneurs Totaux
              </div>
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-display)',
              color: 'var(--color-primary-hearst-green)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-2)'
            }}>
              {siteConfig.blocks.length}
            </div>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)'
            }}>
              Blocs de Puissance
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-display)',
              color: 'var(--color-primary-hearst-green)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-2)'
            }}>
              {containersPerBlock}
            </div>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)'
            }}>
              Conteneurs par Bloc
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-display)',
              color: 'var(--color-primary-hearst-green)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-2)'
            }}>
              {siteConfig.containerSpec.totalPowerMW} MW
            </div>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)'
            }}>
              Puissance par Conteneur
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications du Conteneur */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Spécifications Techniques
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          {/* Type et Modèle */}
          <div style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-4)',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              Type de Conteneur
            </h3>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-6)',
              padding: 'var(--spacing-4)',
              backgroundColor: 'var(--color-bg-tertiary)',
              borderRadius: 'var(--radius-small)'
            }}>
              {siteConfig.containerSpec.type}
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Puissance Nominale:
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {siteConfig.containerSpec.nominalPowerMW} MW
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Puissance Refroidissement:
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {siteConfig.containerSpec.coolingPowerMW} MW
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 'var(--spacing-3)',
                borderTop: '1px solid var(--color-ash-grey-accent)'
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Puissance Totale:
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-primary-hearst-green)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {siteConfig.containerSpec.totalPowerMW} MW
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Tension d'Alimentation:
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {siteConfig.containerSpec.supplyVoltageKV} kV
                </span>
              </div>
            </div>
          </div>

          {/* Dimensions Physiques */}
          <div style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-4)',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              Dimensions Physiques
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-4)',
              marginBottom: 'var(--spacing-6)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--spacing-3)',
                backgroundColor: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-small)'
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Longueur:
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {containerDimensions.length} m
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--spacing-3)',
                backgroundColor: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-small)'
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Largeur:
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {containerDimensions.width} m
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--spacing-3)',
                backgroundColor: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-small)'
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Hauteur:
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {containerDimensions.height} m
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)',
              paddingTop: 'var(--spacing-4)',
              borderTop: '1px solid var(--color-ash-grey-accent)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Volume:
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {containerDimensions.volume} m³
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-secondary)'
                }}>
                  Poids:
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {containerDimensions.weight.toLocaleString()} kg
                </span>
              </div>
            </div>
          </div>

          {/* Configuration Électrique */}
          <div style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-default)',
            border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              marginBottom: 'var(--spacing-4)',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              Configuration Électrique
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-4)'
            }}>
              <div style={{
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-small)'
              }}>
                <div style={{
                  fontSize: 'var(--font-size-caption)',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  Conteneurs par Transformateur
                </div>
                <div style={{
                  fontSize: 'var(--font-size-section-title)',
                  color: 'var(--color-primary-hearst-green)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {siteConfig.containerSpec.containersPerTransformer}
                </div>
              </div>

              <div style={{
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-small)'
              }}>
                <div style={{
                  fontSize: 'var(--font-size-caption)',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  Transformateurs par Bloc
                </div>
                <div style={{
                  fontSize: 'var(--font-size-section-title)',
                  color: 'var(--color-primary-hearst-green)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {siteConfig.blocks[0]?.numTransformers || 8}
                </div>
              </div>

              <div style={{
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-small)',
                border: '2px solid var(--color-primary-hearst-green)'
              }}>
                <div style={{
                  fontSize: 'var(--font-size-caption)',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  Puissance Totale Site
                </div>
                <div style={{
                  fontSize: 'var(--font-size-section-title)',
                  color: 'var(--color-primary-hearst-green)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {siteConfig.totalPowerMW} MW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Répartition par Bloc */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Répartition par Bloc
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          {siteConfig.blocks.map((block) => {
            const isSelected = selectedBlockId === block.id
            return (
              <Link
                key={block.id}
                href={`/blocks/${block.id}`}
                onMouseEnter={() => setSelectedBlockId(block.id)}
                onMouseLeave={() => setSelectedBlockId(null)}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: isSelected ? 'var(--color-bg-hover)' : 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-default)',
                  border: isSelected
                    ? '2px solid var(--color-primary-hearst-green)'
                    : 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
                  cursor: 'pointer',
                  transition: 'var(--transition-base)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  boxShadow: isSelected ? 'var(--shadow-glow-green)' : 'var(--shadow-sm)'
                }}>
                  <div style={{
                    fontSize: 'var(--font-size-subsection-title)',
                    color: 'var(--color-primary-hearst-green)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: 'var(--spacing-4)'
                  }}>
                    {block.name}
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-3)'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        fontSize: 'var(--font-size-body)',
                        color: 'var(--color-text-secondary)'
                      }}>
                        Conteneurs:
                      </span>
                      <span style={{
                        fontSize: 'var(--font-size-body)',
                        color: 'var(--color-text-primary)',
                        fontWeight: 'var(--font-weight-semibold)'
                      }}>
                        {block.numContainers}
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        fontSize: 'var(--font-size-body)',
                        color: 'var(--color-text-secondary)'
                      }}>
                        Transformateurs:
                      </span>
                      <span style={{
                        fontSize: 'var(--font-size-body)',
                        color: 'var(--color-text-primary)',
                        fontWeight: 'var(--font-weight-semibold)'
                      }}>
                        {block.numTransformers}
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: 'var(--spacing-3)',
                      borderTop: '1px solid var(--color-ash-grey-accent)'
                    }}>
                      <span style={{
                        fontSize: 'var(--font-size-body)',
                        color: 'var(--color-text-secondary)'
                      }}>
                        Puissance:
                      </span>
                      <span style={{
                        fontSize: 'var(--font-size-body)',
                        color: 'var(--color-primary-hearst-green)',
                        fontWeight: 'var(--font-weight-bold)'
                      }}>
                        {block.targetPowerMW} MW
                      </span>
                    </div>
                  </div>

                  <div style={{
                    marginTop: 'var(--spacing-4)',
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-primary-hearst-green)',
                    color: 'var(--color-text-default)',
                    borderRadius: 'var(--radius-small)',
                    textAlign: 'center',
                    fontSize: 'var(--font-size-body)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Voir les détails →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Visualisation des Dimensions */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
        Visualisation 3D des Dimensions
        </h2>

        <div style={{
          padding: 'var(--spacing-8)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-default)',
          border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
          background: 'linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 100%)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-10)',
            flexWrap: 'wrap'
          }}>
            {/* Vue de côté avec perspective 3D */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-4)',
              perspective: '1000px'
            }}>
              <div style={{
                fontSize: 'var(--font-size-subsection-title)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Vue de Côté
              </div>
              <div style={{
                width: `${containerDimensions.length * 25}px`,
                height: `${containerDimensions.height * 25}px`,
                background: 'linear-gradient(135deg, var(--color-primary-hearst-green), var(--color-primary-hearst-green-light))',
                borderRadius: 'var(--radius-small)',
                border: '3px solid var(--color-primary-hearst-green-light)',
                position: 'relative',
                boxShadow: '0 0 30px rgba(138, 253, 129, 0.6), inset 0 0 20px rgba(138, 253, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-default)',
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-bold)',
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                transition: 'transform var(--transition-base)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'
              }}
              >
                <div style={{ textAlign: 'center', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  <div style={{ fontSize: 'var(--font-size-body)' }}>{containerDimensions.length}m</div>
                  <div style={{ fontSize: '12px', opacity: 0.9, margin: '4px 0' }}>×</div>
                  <div style={{ fontSize: 'var(--font-size-body)' }}>{containerDimensions.height}m</div>
                </div>
                {/* Effet de profondeur */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  right: '10%',
                  bottom: '10%',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: 'var(--radius-small)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>

            {/* Vue de dessus avec perspective 3D */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-4)',
              perspective: '1000px'
            }}>
              <div style={{
                fontSize: 'var(--font-size-subsection-title)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Vue de Dessus
              </div>
              <div style={{
                width: `${containerDimensions.length * 25}px`,
                height: `${containerDimensions.width * 25}px`,
                background: 'linear-gradient(135deg, var(--color-primary-hearst-green), var(--color-primary-hearst-green-light))',
                borderRadius: 'var(--radius-small)',
                border: '3px solid var(--color-primary-hearst-green-light)',
                position: 'relative',
                boxShadow: '0 0 30px rgba(138, 253, 129, 0.6), inset 0 0 20px rgba(138, 253, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-default)',
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-bold)',
                transform: 'perspective(1000px) rotateX(-10deg) rotateZ(5deg)',
                transition: 'transform var(--transition-base)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateZ(0deg) scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(-10deg) rotateZ(5deg)'
              }}
              >
                <div style={{ textAlign: 'center', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  <div style={{ fontSize: 'var(--font-size-body)' }}>{containerDimensions.length}m</div>
                  <div style={{ fontSize: '12px', opacity: 0.9, margin: '4px 0' }}>×</div>
                  <div style={{ fontSize: 'var(--font-size-body)' }}>{containerDimensions.width}m</div>
                </div>
                {/* Effet de profondeur */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  right: '10%',
                  bottom: '10%',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: 'var(--radius-small)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>

            {/* Informations */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-4)',
              minWidth: '200px'
            }}>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Dimensions Complètes
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-2)',
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-small)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>L × l × H:</span>
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                    {containerDimensions.length} × {containerDimensions.width} × {containerDimensions.height} m
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Volume:</span>
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                    {containerDimensions.volume} m³
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Poids:</span>
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                    {containerDimensions.weight.toLocaleString()} kg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
