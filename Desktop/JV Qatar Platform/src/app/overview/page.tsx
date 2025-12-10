'use client'

import { siteConfig } from '@/lib/siteConfig'
import Link from 'next/link'
import Image from 'next/image'
import LightningIcon from '@/components/icons/LightningIcon'
import ContainerIcon from '@/components/icons/ContainerIcon'
import TransformerIcon from '@/components/icons/TransformerIcon'
import GridIcon from '@/components/icons/GridIcon'

export default function OverviewPage() {
  const totalContainers = siteConfig.blocks.reduce((sum, block) => sum + block.numContainers, 0)
  const totalTransformers = siteConfig.blocks.reduce((sum, block) => sum + block.numTransformers, 0)

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
          Overview
        </h1>
      </header>

      {/* Container Section */}
      <section style={{
        marginBottom: 'var(--spacing-8)',
        maxWidth: '1200px',
        margin: '0 auto var(--spacing-8) auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-8)',
          alignItems: 'center',
          padding: 'var(--spacing-8)',
          backgroundColor: 'transparent',
          borderRadius: 'var(--radius-section)',
          border: '1px solid #E0E0E0',
          boxShadow: 'var(--shadow-lg)',
          transition: 'var(--transition-base)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-2xl)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
        >
          {/* Image Container */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '400px',
            borderRadius: 'var(--radius-default)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-content)'
          }}>
            <Image
              src="/1Container.webp"
              alt="Bitmain ANTSPACE HD5 Hydro Mining Container"
              fill
              style={{
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            />
          </div>

          {/* Description */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-5)'
          }}>
            <div>
              <h2 style={{
                fontSize: 'var(--font-size-section-title)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-3)',
                lineHeight: 'var(--line-height-section-title)'
              }}>
                Bitmain ANTSPACE HD5 (Hydro)
              </h2>
              <div style={{
                width: '60px',
                height: '4px',
                backgroundColor: 'var(--color-primary-hearst-green)',
                borderRadius: 'var(--radius-full)',
                marginBottom: 'var(--spacing-4)'
              }} />
            </div>

            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-4)'
            }}>
              Le Bitmain ANTSPACE HD5 (Hydro) est un conteneur de minage de dernière génération avec refroidissement par immersion liquide, conçu pour une efficacité et des performances maximales. Cette solution innovante combine une technologie de minage avancée avec des méthodes de refroidissement durables, idéale pour les opérations de minage à grande échelle.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-4)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-3)',
                padding: 'var(--spacing-4)',
                backgroundColor: 'rgba(46, 204, 113, 0.05)',
                borderRadius: 'var(--radius-default)',
                border: '1px solid rgba(46, 204, 113, 0.1)'
              }}>
                <ContainerIcon size={24} color="var(--color-primary-hearst-green)" />
                <div>
                  <div style={{
                    fontSize: 'var(--font-size-body-minor)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--spacing-1)'
                  }}>
                    Type de Conteneur
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-body)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    {siteConfig.containerSpec.type}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-3)',
                padding: 'var(--spacing-4)',
                backgroundColor: 'rgba(46, 204, 113, 0.05)',
                borderRadius: 'var(--radius-default)',
                border: '1px solid rgba(46, 204, 113, 0.1)'
              }}>
                <LightningIcon size={24} color="var(--color-primary-hearst-green)" />
                <div>
                  <div style={{
                    fontSize: 'var(--font-size-body-minor)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--spacing-1)'
                  }}>
                    Puissance Totale
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-body)',
                    color: 'var(--color-primary-hearst-green)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    {siteConfig.containerSpec.totalPowerMW} MW
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-3)',
                padding: 'var(--spacing-4)',
                backgroundColor: 'rgba(46, 204, 113, 0.05)',
                borderRadius: 'var(--radius-default)',
                border: '1px solid rgba(46, 204, 113, 0.1)'
              }}>
                <TransformerIcon size={24} color="var(--color-primary-hearst-green)" />
                <div>
                  <div style={{
                    fontSize: 'var(--font-size-body-minor)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--spacing-1)'
                  }}>
                    Tension d'Alimentation
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-body)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    {siteConfig.containerSpec.supplyVoltageKV} kV
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: 'var(--spacing-2)',
              padding: 'var(--spacing-4)',
              backgroundColor: 'rgba(46, 204, 113, 0.08)',
              borderRadius: 'var(--radius-default)',
              border: '1px solid rgba(46, 204, 113, 0.2)'
            }}>
              <p style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-primary)',
                lineHeight: 'var(--line-height-relaxed)',
                margin: 0
              }}>
                <strong style={{ color: 'var(--color-primary-hearst-green)' }}>Caractéristiques Clés :</strong> La technologie de refroidissement par immersion liquide assure une gestion thermique optimale, réduisant la consommation d'énergie tout en maintenant des performances de minage maximales. Le design modulaire permet un déploiement facile et une scalabilité dans les grandes installations de minage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Explication du Projet */}
      <section style={{
        marginBottom: 'var(--spacing-8)',
        maxWidth: '1200px',
        margin: '0 auto var(--spacing-8) auto',
        padding: 'var(--spacing-8)',
        backgroundColor: 'transparent',
        borderRadius: 'var(--radius-section)',
        border: '1px solid #E0E0E0'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-6)',
          lineHeight: 'var(--line-height-section-title)'
        }}>
          À Propos du Projet
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-6)'
        }}>
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Qatar - Initiative Stratégique
            </h3>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-4)'
            }}>
              Ce projet représente une initiative stratégique majeure au Qatar, positionnant le pays comme un acteur clé dans l'industrie du minage de Bitcoin. En s'appuyant sur les ressources énergétiques abondantes et l'infrastructure moderne du Qatar, cette installation de minage à grande échelle démontre l'engagement du pays envers l'innovation technologique et la diversification économique.
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Bitcoin Reserve - Vision à Long Terme
            </h3>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-4)'
            }}>
              Cette infrastructure de minage contribue à la constitution d'une réserve stratégique de Bitcoin pour le Qatar. En produisant directement des bitcoins grâce à une infrastructure de pointe, le projet s'inscrit dans une vision à long terme de diversification des actifs et de participation active à l'écosystème des cryptomonnaies. Cette approche positionne le Qatar comme un acteur visionnaire dans le paysage financier numérique mondial.
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-primary-hearst-green)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-3)'
            }}>
              Technologie de Pointe
            </h3>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--spacing-4)'
            }}>
              L'utilisation de conteneurs Bitmain ANTSPACE HD5 (Hydro) avec refroidissement par immersion liquide représente la technologie la plus avancée disponible sur le marché. Cette solution optimise non seulement l'efficacité énergétique mais aussi la durabilité environnementale, alignant les objectifs économiques avec les préoccupations écologiques modernes.
            </p>
          </div>

          <div style={{
            padding: 'var(--spacing-5)',
            backgroundColor: 'rgba(46, 204, 113, 0.08)',
            borderRadius: 'var(--radius-default)',
            border: '1px solid rgba(46, 204, 113, 0.2)'
          }}>
            <p style={{
              fontSize: 'var(--font-size-body)',
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--line-height-relaxed)',
              margin: 0,
              fontStyle: 'italic'
            }}>
              <strong style={{ color: 'var(--color-primary-hearst-green)' }}>Vision :</strong> Ce projet incarne la vision du Qatar de devenir un leader mondial dans l'industrie des cryptomonnaies, combinant innovation technologique, stabilité énergétique et vision stratégique à long terme pour créer de la valeur durable.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
