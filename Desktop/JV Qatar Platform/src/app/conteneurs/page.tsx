'use client'

import { siteConfig } from '@/lib/siteConfig'
import Link from 'next/link'
import Image from 'next/image'
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
      minHeight: 'calc(100vh - var(--structure-header-height))',
      backgroundColor: 'var(--color-bg-content)',
      color: 'var(--color-text-primary)',
      padding: 'var(--spacing-8) var(--spacing-6)'
    }}>
      {/* Header */}
      <header style={{
        marginBottom: 'var(--spacing-8)',
        paddingBottom: 'var(--spacing-6)'
      }}>
        <h1 style={{
          fontSize: 'var(--font-size-display)',
          lineHeight: 'var(--line-height-display)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-3)',
          letterSpacing: 'var(--letter-spacing-tight)'
        }}>
          Containers
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body-minor)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-normal)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          Everything you need to know about containers
        </p>
      </header>

      {/* Section Photos des Containers */}
      <section style={{
        marginBottom: 'var(--spacing-8)',
        padding: 'var(--spacing-5)',
        backgroundColor: 'transparent',
        borderRadius: 'var(--radius-default)',
        border: '1px solid #E0E0E0'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-5)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
          Galerie Photos
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: 'var(--radius-default)',
            overflow: 'hidden',
            border: '1px solid #E0E0E0'
          }}>
            <Image
              src="/bitmain-antspace-hd5-hydro.webp"
              alt="Bitmain ANTSPACE HD5 Hydro"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: 'var(--radius-default)',
            overflow: 'hidden',
            border: '1px solid #E0E0E0'
          }}>
            <Image
              src="/bitmain-antspace-hd5-hydro (1).webp"
              alt="Bitmain ANTSPACE HD5 Hydro - Vue alternative"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: 'var(--radius-default)',
            overflow: 'hidden',
            border: '1px solid #E0E0E0'
          }}>
            <Image
              src="/Hearst container.webp"
              alt="Hearst Container"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: 'var(--radius-default)',
            overflow: 'hidden',
            border: '1px solid #E0E0E0'
          }}>
            <Image
              src="/8fddee54-2f77-49ee-af85-0f34ecb8ac78_540.jpg"
              alt="Container - Installation"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Section Caractéristiques Hardware */}
      <section style={{
        marginBottom: 'var(--spacing-8)',
        padding: 'var(--spacing-5)',
        backgroundColor: 'transparent',
        borderRadius: 'var(--radius-default)',
        border: '1px solid #E0E0E0',
        borderLeft: '3px solid var(--color-primary-hearst-green)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-5)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
          Caractéristiques Hardware
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Dimensions
            </h3>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              <div style={{ marginBottom: 'var(--spacing-2)' }}>
                <strong>Longueur:</strong> {containerDimensions.length} m
              </div>
              <div style={{ marginBottom: 'var(--spacing-2)' }}>
                <strong>Largeur:</strong> {containerDimensions.width} m
              </div>
              <div style={{ marginBottom: 'var(--spacing-2)' }}>
                <strong>Hauteur:</strong> {containerDimensions.height} m
              </div>
              <div style={{
                marginTop: 'var(--spacing-3)',
                paddingTop: 'var(--spacing-3)',
                borderTop: '1px solid var(--color-ash-grey-accent)',
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)'
              }}>
                Total: {containerDimensions.length} × {containerDimensions.width} × {containerDimensions.height} m
              </div>
            </div>
          </div>
          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Machines ASIC
            </h3>
            <div style={{
              fontSize: 'var(--font-size-display)',
              color: 'var(--color-primary-hearst-green)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-2)'
            }}>
              230
            </div>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)'
            }}>
              machines par container
            </div>
          </div>
          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Dernière Génération
            </h3>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-2)'
            }}>
              <strong style={{ color: 'var(--color-primary-hearst-green)' }}>
                {siteConfig.containerSpec.type}
              </strong>
            </div>
            <div style={{
              fontSize: 'var(--font-size-body-minor)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              Refroidissement par immersion liquide - Technologie de pointe pour l'extraction de crypto-monnaies
            </div>
          </div>
        </div>
      </section>

      {/* Section Pédagogique - Introduction pour Néophytes */}
      <section style={{
        marginBottom: 'var(--spacing-6)',
        padding: 'var(--spacing-5)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            borderLeft: '3px solid var(--color-primary-hearst-green)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-5)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-3)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          Understanding Containers
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-4)',
          marginBottom: 'var(--spacing-4)'
        }}>
          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-4)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              What is a Container?
            </h3>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 0
            }}>
              A <strong style={{ color: 'var(--color-primary-hearst-green)' }}>giant computer</strong> in a metal box.
              <br/><br/>
              Contains machines that mine Bitcoin.
            </p>
          </div>

          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-4)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              How it works?
            </h3>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 0
            }}>
              <strong style={{ color: 'var(--color-primary-hearst-green)' }}>Electricity</strong> from the grid
              <br/>
              ↓
              <br/>
              <strong style={{ color: 'var(--color-primary-hearst-green)' }}>Transformer</strong> reduces voltage
              <br/>
              ↓
              <br/>
              <strong style={{ color: 'var(--color-primary-hearst-green)' }}>2 containers</strong> powered
            </p>
          </div>

          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-4)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              Refroidissement
            </h3>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 0
            }}>
              Machines <strong style={{ color: 'var(--color-primary-hearst-green)' }}>heat up</strong> a lot.
              <br/><br/>
              Water <strong style={{ color: 'var(--color-primary-hearst-green)' }}>cools</strong> like a car radiator.
            </p>
          </div>
        </div>

          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid var(--color-primary-hearst-green)',
            boxShadow: 'none'
          }}>
          <h3 style={{
            fontSize: 'var(--font-size-subsection-title)',
            color: 'var(--color-text-primary)',
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-4)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Structure Simple
          </h3>
          <div style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-primary)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            <div style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)' }}>
              <strong style={{ color: 'var(--color-primary-hearst-green)' }}>1 Block</strong> = <strong style={{ color: 'var(--color-primary-hearst-green)' }}>8 Transformers</strong> = <strong style={{ color: 'var(--color-primary-hearst-green)' }}>16 Containers</strong>
            </div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-body-minor)' }}>
              2 containers per transformer
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Globales */}
      <section style={{ marginBottom: 'var(--spacing-4)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-4)',
          marginBottom: 'var(--spacing-5)'
        }}>
          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none',
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
              background: 'radial-gradient(circle, var(--color-primary-hearst-green) 20%, transparent 70%)',
              filter: 'blur(20px)'
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: 'var(--font-size-display)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-3)',
                textShadow: 'none',
                lineHeight: 1
              }}>
                {totalContainers}
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Total Containers
              </div>
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none'
          }}>
            <div style={{
              fontSize: 'var(--font-size-display)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-3)',
              lineHeight: 1
            }}>
              {siteConfig.blocks.length}
            </div>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              Power Blocks
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none'
          }}>
            <div style={{
              fontSize: 'var(--font-size-display)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-2)'
            }}>
              {containersPerBlock}
            </div>
            <div style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-secondary)'
            }}>
              Containers per Block
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none'
          }}>
            <div style={{
              fontSize: 'var(--font-size-display)',
              color: 'var(--color-text-primary)',
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
      <section style={{ marginBottom: 'var(--spacing-4)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-5)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-bold)'
        }}>
          Specifications
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          {/* Type et Modèle */}
          <div style={{
            padding: 'var(--spacing-5)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--spacing-5)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              Type
            </h3>
            <div style={{
              fontSize: 'var(--font-size-body-minor)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-5)',
              paddingBottom: 'var(--spacing-4)',
              borderBottom: '1px solid var(--color-ash-grey-accent)'
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
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Puissance Minage
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-bold)'
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
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Puissance Refroidissement
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-bold)'
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
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  Puissance Totale
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
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
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Tension
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {siteConfig.containerSpec.supplyVoltageKV} kV
                </span>
              </div>
            </div>
          </div>

          {/* Dimensions Physiques */}
          <div style={{
            padding: 'var(--spacing-5)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--spacing-4)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              Physical Dimensions
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-4)',
              marginBottom: 'var(--spacing-4)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-secondary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Longueur
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body-minor)',
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
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-secondary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Largeur
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
              }}>
                <span style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-secondary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Hauteur
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
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-secondary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Volume
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body-minor)',
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
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-secondary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Poids
                </span>
                <span style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>
                  {containerDimensions.weight.toLocaleString('fr-FR')} kg
                </span>
              </div>
            </div>
          </div>

          {/* Configuration Électrique */}
          <div style={{
            padding: 'var(--spacing-5)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            boxShadow: 'none'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--spacing-4)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              Configuration Électrique
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-4)'
            }}>
              <div style={{
              }}>
                <div style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Containers per Transformer
                </div>
                <div style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {siteConfig.containerSpec.containersPerTransformer}
                </div>
              </div>

              <div style={{
              }}>
                <div style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Transformers per Block
                </div>
                <div style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {siteConfig.blocks[0]?.numTransformers || 8}
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: 'var(--font-size-body-minor)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Puissance Totale Site
                </div>
                <div style={{
                  fontSize: 'var(--font-size-body)',
                  color: 'var(--color-text-primary)',
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
      <section style={{ marginBottom: 'var(--spacing-4)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-text-primary)'
        }}>
          Distribution by Block
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-4)'
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
                  padding: 'var(--spacing-4)',
                  backgroundColor: isSelected ? 'rgba(46, 204, 113, 0.08)' : 'transparent',
                  borderRadius: 'var(--radius-default)',
                  border: isSelected
                    ? '2px solid var(--color-primary-hearst-green)'
                    : 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
                  cursor: 'pointer',
                  transition: 'var(--transition-base)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  boxShadow: 'none'
                }}>
                  <div style={{
                    fontSize: 'var(--font-size-body)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 'var(--font-weight-semibold)',
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
                        fontSize: 'var(--font-size-body-minor)',
                        color: 'var(--color-text-secondary)',
                        fontWeight: 'var(--font-weight-medium)'
                      }}>
                        Containers
                      </span>
                      <span style={{
                        fontSize: 'var(--font-size-body-minor)',
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
                        fontSize: 'var(--font-size-body-minor)',
                        color: 'var(--color-text-secondary)',
                        fontWeight: 'var(--font-weight-medium)'
                      }}>
                        Transformers
                      </span>
                      <span style={{
                        fontSize: 'var(--font-size-body-minor)',
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
                        fontSize: 'var(--font-size-body-minor)',
                        color: 'var(--color-text-secondary)',
                        fontWeight: 'var(--font-weight-medium)'
                      }}>
                        Puissance
                      </span>
                      <span style={{
                        fontSize: 'var(--font-size-body-minor)',
                        color: 'var(--color-text-primary)',
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
                    color: '#FFFFFF',
                    borderRadius: 'var(--radius-small)',
                    textAlign: 'center',
                    fontSize: 'var(--font-size-body)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    View Details →
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
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-text-primary)'
        }}>
        3D Dimension Visualization
        </h2>

        <div style={{
          padding: 'var(--spacing-5)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius-default)',
            border: '1px solid #E0E0E0',
            background: 'transparent'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-4)',
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
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Side View
              </div>
              <div style={{
                width: `${containerDimensions.length * 25}px`,
                height: `${containerDimensions.height * 25}px`,
                background: 'linear-gradient(135deg, var(--color-primary-hearst-green), var(--color-primary-hearst-green-light))',
                borderRadius: 'var(--radius-small)',
                border: '2px solid var(--color-primary-hearst-green)',
                position: 'relative',
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
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
                <div style={{ textAlign: 'center', textShadow: 'none' }}>
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
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Top View
              </div>
              <div style={{
                width: `${containerDimensions.length * 25}px`,
                height: `${containerDimensions.width * 25}px`,
                background: 'linear-gradient(135deg, var(--color-primary-hearst-green), var(--color-primary-hearst-green-light))',
                borderRadius: 'var(--radius-small)',
                border: '2px solid var(--color-primary-hearst-green)',
                position: 'relative',
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)',
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
                <div style={{ textAlign: 'center', textShadow: 'none' }}>
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

            {/* Information */}
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
                Complete Dimensions
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-2)',
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
                    {containerDimensions.weight.toLocaleString('fr-FR')} kg
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
