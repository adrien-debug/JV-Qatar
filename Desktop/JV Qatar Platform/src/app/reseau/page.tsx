'use client'

import { siteConfig, siteCurrent33kV, blockCurrent33kV } from '@/lib/siteConfig'

export default function ReseauPage() {
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
          Connexion au Réseau
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          Détails complets sur la connexion électrique et l'infrastructure réseau
        </p>
      </header>

      {/* Informations Opérateur */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Opérateur Réseau
        </h2>
        <div style={{
          padding: 'var(--spacing-8)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-default)',
          border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-6)'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Opérateur
              </div>
              <div style={{
                fontSize: 'var(--font-size-subsection-title)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {siteConfig.gridConnection.operator}
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Tension Réseau
              </div>
              <div style={{
                fontSize: 'var(--font-size-subsection-title)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {siteConfig.gridConnection.gridVoltageKV} kV
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Puissance Maximale Contractée
              </div>
              <div style={{
                fontSize: 'var(--font-size-subsection-title)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {siteConfig.gridConnection.maxContractPowerMW} MW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poste de Transformation */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Poste de Transformation
        </h2>
        <div style={{
          padding: 'var(--spacing-8)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-default)',
          border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
        }}>
          <div style={{
            marginBottom: 'var(--spacing-6)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-caption)',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--spacing-2)'
            }}>
              Nom du Poste
            </div>
            <div style={{
              fontSize: 'var(--font-size-subsection-title)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-weight-semibold)'
            }}>
              {siteConfig.gridConnection.substationName}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-6)'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Tension Primaire
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.gridConnection.substationPrimaryKV} kV
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Tension Secondaire
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.gridConnection.substationSecondaryKV} kV
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-caption)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Rapport de Transformation
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {siteConfig.gridConnection.substationPrimaryKV}/{siteConfig.gridConnection.substationSecondaryKV} kV
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paramètres Électriques */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Paramètres Électriques
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          <div style={{
            padding: 'var(--spacing-6)',
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
              Niveau 132 kV
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Tension:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.gridConnection.gridVoltageKV} kV
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Source:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Réseau Kahramaa
                </span>
              </div>
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-6)',
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
              Niveau 33 kV
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Tension:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.gridConnection.clientVoltageKV} kV
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Courant Total:</span>
                <span style={{ color: 'var(--color-primary-hearst-green)', fontWeight: 'var(--font-weight-bold)' }}>
                  ~{siteCurrent33kV} A
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Puissance:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.totalPowerMW} MW
                </span>
              </div>
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-6)',
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
              Niveau 0.4 kV
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Tension:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.containerSpec.supplyVoltageKV} kV
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Distribution:</span>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Par Transformateur
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Conteneurs:</span>
                <span style={{ color: 'var(--color-primary-hearst-green)', fontWeight: 'var(--font-weight-bold)' }}>
                  {siteConfig.containerSpec.containersPerTransformer} par TX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schéma de Connexion */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
        Schéma de Connexion
        </h2>
        <div style={{
          padding: 'var(--spacing-8)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-default)',
          border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-6)',
            alignItems: 'center'
          }}>
            {/* Niveau 132kV */}
            <div style={{
              padding: 'var(--spacing-6)',
              backgroundColor: 'var(--color-bg-tertiary)',
              borderRadius: 'var(--radius-default)',
              border: '2px solid var(--color-primary-hearst-green)',
              minWidth: '300px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-glow-green)'
            }}>
              <div style={{
                fontSize: 'var(--font-size-subsection-title)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-bold)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Réseau Kahramaa
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                {siteConfig.gridConnection.gridVoltageKV} kV
              </div>
            </div>

            {/* Flèche */}
            <div style={{
              width: '3px',
              height: '40px',
              backgroundColor: 'var(--color-primary-hearst-green)',
              borderRadius: 'var(--radius-full)',
              position: 'relative'
            }} />

            {/* Poste de Transformation */}
            <div style={{
              padding: 'var(--spacing-6)',
              backgroundColor: 'var(--color-bg-tertiary)',
              borderRadius: 'var(--radius-default)',
              border: '2px solid var(--color-ash-grey-accent)',
              minWidth: '300px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 'var(--font-size-subsection-title)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)'
              }}>
                {siteConfig.gridConnection.substationName}
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                {siteConfig.gridConnection.substationPrimaryKV}/{siteConfig.gridConnection.substationSecondaryKV} kV
              </div>
            </div>

            {/* Flèche */}
            <div style={{
              width: '3px',
              height: '40px',
              backgroundColor: 'var(--color-primary-hearst-green)',
              borderRadius: 'var(--radius-full)'
            }} />

            {/* Distribution 33kV */}
            <div style={{
              padding: 'var(--spacing-6)',
              backgroundColor: 'var(--color-bg-tertiary)',
              borderRadius: 'var(--radius-default)',
              border: '2px solid var(--color-ash-grey-accent)',
              minWidth: '300px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 'var(--font-size-subsection-title)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Distribution 33 kV
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)'
              }}>
                {siteConfig.totalPowerMW} MW • ~{siteCurrent33kV} A
              </div>
            </div>

            {/* Flèche */}
            <div style={{
              width: '3px',
              height: '40px',
              backgroundColor: 'var(--color-primary-hearst-green)',
              borderRadius: 'var(--radius-full)'
            }} />

            {/* Blocs de Puissance */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'var(--spacing-4)',
              width: '100%',
              maxWidth: '800px'
            }}>
              {siteConfig.blocks.map((block) => (
                <div
                  key={block.id}
                  style={{
                    padding: 'var(--spacing-4)',
                    backgroundColor: 'var(--color-bg-tertiary)',
                    borderRadius: 'var(--radius-default)',
                    border: '1px solid var(--color-ash-grey-accent)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    fontSize: 'var(--font-size-body)',
                    color: 'var(--color-primary-hearst-green)',
                    fontWeight: 'var(--font-weight-semibold)',
                    marginBottom: 'var(--spacing-1)'
                  }}>
                    {block.name}
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-caption)',
                    color: 'var(--color-text-secondary)'
                  }}>
                    {block.targetPowerMW} MW
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
