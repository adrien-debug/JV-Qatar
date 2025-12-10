'use client'

import { siteConfig, siteCurrent33kV, blockCurrent33kV } from '@/lib/siteConfig'

export default function ReseauPage() {
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
          Network
        </h1>
        <p style={{
          fontSize: 'var(--font-size-body-minor)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-normal)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          Complete details on electrical connection and network infrastructure
        </p>
      </header>

      {/* Informations Opérateur */}
      <section style={{ marginBottom: 'var(--spacing-4)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
          Network Operator
        </h2>
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-4)'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Opérateur
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.gridConnection.operator}
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Grid Voltage
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.gridConnection.gridVoltageKV} kV
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Puissance Maximale Contractée
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.gridConnection.maxContractPowerMW} MW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poste de Transformation */}
      <section style={{ marginBottom: 'var(--spacing-4)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
          Poste de Transformation
        </h2>
        <div>
          <div style={{
            marginBottom: 'var(--spacing-4)'
          }}>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Nom du Poste
              </div>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.gridConnection.substationName}
              </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-4)'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Tension Primaire
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.gridConnection.substationPrimaryKV} kV
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Tension Secondaire
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.gridConnection.substationSecondaryKV} kV
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-2)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Rapport de Transformation
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {siteConfig.gridConnection.substationPrimaryKV}/{siteConfig.gridConnection.substationSecondaryKV} kV
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paramètres Électriques */}
      <section style={{ marginBottom: 'var(--spacing-4)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
          Paramètres Électriques
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          <div>
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
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-secondary)' }}>Tension</span>
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.gridConnection.gridVoltageKV} kV
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-secondary)' }}>Source</span>
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Kahramaa Grid
                </span>
              </div>
            </div>
          </div>

          <div>
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
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-secondary)' }}>Courant Total</span>
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-primary-hearst-green)', fontWeight: 'var(--font-weight-bold)' }}>
                  ~{siteCurrent33kV} A
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-secondary)' }}>Puissance</span>
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {siteConfig.totalPowerMW} MW
                </span>
              </div>
            </div>
          </div>

          <div>
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
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-secondary)' }}>Distribution</span>
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Par Transformateur
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-text-secondary)' }}>Containers</span>
                <span style={{ fontSize: 'var(--font-size-body-minor)', color: 'var(--color-primary-hearst-green)', fontWeight: 'var(--font-weight-bold)' }}>
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
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
        Schéma de Connexion
        </h2>
        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-4)',
            alignItems: 'center'
          }}>
            {/* Niveau 132kV */}
            <div style={{
              padding: 'var(--spacing-4)',
              backgroundColor: '#F5F5F5',
              borderRadius: 'var(--radius-default)',
              border: '2px solid var(--color-primary-hearst-green)',
              minWidth: '300px',
              textAlign: 'center',
              boxShadow: 'none'
            }}>
              <div style={{
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-primary-hearst-green)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-2)'
              }}>
                Réseau Kahramaa
              </div>
              <div style={{
                fontSize: 'var(--font-size-body-minor)',
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
              padding: 'var(--spacing-4)',
              backgroundColor: '#F5F5F5',
              borderRadius: 'var(--radius-default)',
              border: '1px solid #E0E0E0',
              minWidth: '300px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 'var(--font-size-body)',
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
              padding: 'var(--spacing-4)',
              backgroundColor: '#F5F5F5',
              borderRadius: 'var(--radius-default)',
              border: '1px solid #E0E0E0',
              minWidth: '300px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 'var(--font-size-body)',
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

            {/* Power Blocks */}
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
                    backgroundColor: '#F5F5F5',
                    borderRadius: 'var(--radius-default)',
                    border: '1px solid #E0E0E0',
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
