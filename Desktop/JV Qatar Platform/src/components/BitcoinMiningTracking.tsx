'use client'

import { useState, useEffect } from 'react'
import {
  generate24HourHashrate,
  generate24HourRevenue,
  generateTemperatureData,
  getCurrentMiningMetrics,
  type HourlyDataPoint
} from '@/lib/mockData'
import LineChart from '@/components/LineChart'

export default function BitcoinMiningTracking() {
  const [hashrateData, setHashrateData] = useState<HourlyDataPoint[]>([])
  const [revenueData, setRevenueData] = useState<HourlyDataPoint[]>([])
  const [temperatureData, setTemperatureData] = useState<HourlyDataPoint[]>([])
  const [metrics] = useState(getCurrentMiningMetrics())

  useEffect(() => {
    // Générer les données initiales
    setHashrateData(generate24HourHashrate())
    setRevenueData(generate24HourRevenue())
    setTemperatureData(generateTemperatureData())
    
    // Mettre à jour les données toutes les 30 secondes pour animation
    const interval = setInterval(() => {
      setHashrateData(generate24HourHashrate())
      setRevenueData(generate24HourRevenue())
      setTemperatureData(generateTemperatureData())
    }, 30000)
    
    return () => clearInterval(interval)
  }, [])

  const maxHashrate = Math.max(...hashrateData.map(d => d.value), 520)
  const maxRevenue = Math.max(...revenueData.map(d => d.value), 0.025)
  const maxTemp = Math.max(...temperatureData.map(d => d.value), 30)

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
          {/* Hashrate 24h */}
          <LineChart
            data={hashrateData}
            maxValue={maxHashrate}
            title="Puissance de Calcul sur 24 Heures"
            legend="Hashrate"
            unit="TH/s"
            color="#1E8449"
          />

          {/* Revenus Quotidiens */}
          <LineChart
            data={revenueData.map(p => ({ hour: p.hour, value: p.value }))}
            maxValue={maxRevenue}
            title="Revenus Générés sur 24 Heures"
            legend="Revenus"
            unit="BTC"
            color="#1E8449"
          />

          {/* Température */}
          <div style={{ gridColumn: '1 / -1' }}>
            <LineChart
              data={temperatureData}
              maxValue={maxTemp}
              title="Température des Machines sur 24 Heures"
              legend="Température"
              unit="°C"
              color="#1E8449"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
