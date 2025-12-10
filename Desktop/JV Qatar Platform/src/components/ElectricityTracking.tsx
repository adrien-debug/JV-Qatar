'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/siteConfig'
import {
  generate24HourConsumption,
  generateBlockPowerDistribution,
  generateVoltageCurrentData,
  type HourlyDataPoint,
  type BlockDataPoint
} from '@/lib/mockData'
import LineChart from '@/components/LineChart'

export default function ElectricityTracking() {
  const [consumptionData, setConsumptionData] = useState<HourlyDataPoint[]>([])
  const [blockData, setBlockData] = useState<BlockDataPoint[]>([])
  const [voltageData, setVoltageData] = useState<HourlyDataPoint[]>([])

  useEffect(() => {
    // Générer les données initiales
    setConsumptionData(generate24HourConsumption())
    setBlockData(generateBlockPowerDistribution())
    setVoltageData(generateVoltageCurrentData())
    
    // Mettre à jour les données toutes les 30 secondes pour animation
    const interval = setInterval(() => {
      setConsumptionData(generate24HourConsumption())
      setBlockData(generateBlockPowerDistribution())
      setVoltageData(generateVoltageCurrentData())
    }, 30000)
    
    return () => clearInterval(interval)
  }, [])

  const maxConsumption = Math.max(...consumptionData.map(d => d.value), 110)
  const maxVoltage = Math.max(...voltageData.map(d => d.value), 34)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)'
    }}>
      {/* Graphiques */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-5)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-semibold)'
        }}>
          Graphiques
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '24px'
        }}>
          {/* Consommation 24h */}
          <LineChart
            data={consumptionData}
            maxValue={maxConsumption}
            title="Consommation sur 24 Heures"
            legend="Consommation"
            unit="MW"
            color="#1E8449"
          />

          {/* Répartition par bloc */}
          <div style={{
            padding: '28px 32px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            fontFamily: 'var(--font-family-primary)'
          }}>
            <h3 style={{
              fontSize: '14px',
              color: '#1A1A1A',
              marginBottom: '10px',
              fontWeight: 600,
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-family-primary)',
              paddingBottom: '12px',
              borderBottom: '1px solid #F0F0F0'
            }}>
              Répartition par Bloc
            </h3>
            <p style={{
              fontSize: '12px',
              color: '#666666',
              marginBottom: '24px',
              fontFamily: 'var(--font-family-primary)',
              lineHeight: 1.5
            }}>
              Puissance consommée par chaque bloc de minage
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              minHeight: 'auto'
            }}>
              {blockData.map((block, index) => {
                const percentage = (block.value / siteConfig.totalPowerMW) * 100
                // Utiliser uniquement des nuances de vert (plus foncé pour les premiers, plus clair pour les suivants)
                const greenShades = [
                  '#2ECC71', // Vert principal
                  '#27AE60', // Vert foncé
                  '#58D68D', // Vert clair
                  '#1E8449'  // Vert très foncé
                ]
                const greenShade = greenShades[index % greenShades.length]
                return (
                  <div key={block.blockId} style={{ 
                    position: 'relative',
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#FAFAFA',
                    borderRadius: '6px',
                    border: '1px solid #E5E5E5',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = greenShade
                    e.currentTarget.style.boxShadow = `0 4px 12px ${greenShade}20`
                    e.currentTarget.style.backgroundColor = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E5E5'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.backgroundColor = '#FAFAFA'
                  }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      width: '100%'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: greenShade,
                          boxShadow: `0 0 6px ${greenShade}60`
                        }} />
                        <span style={{
                          fontSize: '13px',
                          color: '#1A1A1A',
                          fontWeight: 600,
                          fontFamily: 'var(--font-family-primary)'
                        }}>
                          {block.blockName}
                        </span>
                      </div>
                      <span style={{
                        fontSize: '14px',
                        color: greenShade,
                        fontWeight: 700,
                        fontFamily: 'var(--font-family-primary)'
                      }}>
                        {block.value.toFixed(1)} MW
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '36px',
                      backgroundColor: '#F0F0F0',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '1px solid #E0E0E0'
                    }}>
                      <div style={{
                        width: `${percentage}%`,
                        height: '100%',
                        background: `linear-gradient(90deg, ${greenShade}, ${greenShade}DD)`,
                        borderRadius: '4px',
                        transition: 'width 0.5s ease-out',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '14px',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: 700,
                        fontFamily: 'var(--font-family-primary)',
                        boxShadow: `inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 2px 4px ${greenShade}30`
                      }}>
                        {percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tension/Courant */}
          <div style={{ gridColumn: '1 / -1' }}>
            <LineChart
              data={voltageData}
              maxValue={maxVoltage}
              title="Tension du Réseau sur 24 Heures"
              legend="Tension"
              unit="kV"
              color="#1E8449"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
