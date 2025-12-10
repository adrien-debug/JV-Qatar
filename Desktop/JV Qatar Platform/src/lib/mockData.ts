/**
 * Mock data generators for dashboard tracking
 * Simulates realistic data for electricity and Bitcoin mining tracking
 */

export interface HourlyDataPoint {
  hour: number
  value: number
}

export interface BlockDataPoint {
  blockId: string
  blockName: string
  value: number
}

// Electricity tracking data
export function generate24HourConsumption(): HourlyDataPoint[] {
  const data: HourlyDataPoint[] = []
  const basePower = 102.4 // MW
  const hours = 24
  const now = new Date()
  const currentHour = now.getHours()

  for (let i = 0; i < hours; i++) {
    // Pattern quotidien réaliste : plus bas la nuit (2-6h), pic en journée (10-16h)
    const hourOfDay = (currentHour + i) % 24
    let dailyPattern = 1.0
    
    if (hourOfDay >= 2 && hourOfDay <= 6) {
      // Nuit : consommation réduite (85-95%)
      dailyPattern = 0.85 + (hourOfDay - 2) * 0.025
    } else if (hourOfDay >= 10 && hourOfDay <= 16) {
      // Journée : pic de consommation (100-105%)
      dailyPattern = 1.0 + (hourOfDay - 10) * 0.008
    } else if (hourOfDay >= 18 && hourOfDay <= 22) {
      // Soirée : consommation modérée (95-100%)
      dailyPattern = 0.95 + (hourOfDay - 18) * 0.0125
    } else {
      // Transition : consommation moyenne (90-100%)
      dailyPattern = 0.9 + Math.abs(hourOfDay - 12) * 0.008
    }
    
    // Variation aléatoire avec tendance lisse
    const randomVariation = 0.97 + Math.random() * 0.06
    // Ajout d'une petite oscillation pour rendre la courbe plus naturelle
    const smoothWave = Math.sin((i / 24) * Math.PI * 4) * 0.02
    
    const value = basePower * dailyPattern * randomVariation + smoothWave * basePower
    data.push({ hour: i, value: Math.round(value * 10) / 10 })
  }
  return data
}

export function generateBlockPowerDistribution(): BlockDataPoint[] {
  const blocks = [
    { id: 'block-1', name: 'Block 1' },
    { id: 'block-2', name: 'Block 2' },
    { id: 'block-3', name: 'Block 3' },
    { id: 'block-4', name: 'Block 4' }
  ]
  
  // Valeurs mockup réalistes et équilibrées pour chaque bloc
  const baseValues = [25.8, 25.4, 25.6, 25.2] // Légèrement différentes pour montrer la variation
  
  return blocks.map((block, index) => ({
    blockId: block.id,
    blockName: block.name,
    value: baseValues[index] + (Math.random() * 0.4 - 0.2) // Petite variation autour de la valeur de base
  }))
}

export function generateVoltageCurrentData(): HourlyDataPoint[] {
  const data: HourlyDataPoint[] = []
  const baseVoltage = 33 // kV
  const hours = 24

  for (let i = 0; i < hours; i++) {
    // Tension avec variation réaliste : légère baisse en journée (charge réseau)
    const hourOfDay = i
    let voltageVariation = 0
    
    if (hourOfDay >= 8 && hourOfDay <= 18) {
      // Journée : légère baisse due à la charge réseau (-0.15 à -0.05 kV)
      voltageVariation = -0.15 + (hourOfDay - 8) * 0.01
    } else {
      // Nuit : tension plus stable, légèrement plus élevée
      voltageVariation = 0.05 - Math.abs(hourOfDay - 12) * 0.003
    }
    
    // Variation aléatoire fine
    const randomNoise = (Math.random() * 0.15 - 0.075)
    // Oscillation très légère pour courbe naturelle
    const microWave = Math.sin((i / 24) * Math.PI * 6) * 0.03
    
    const voltage = baseVoltage + voltageVariation + randomNoise + microWave
    data.push({ hour: i, value: Math.round(voltage * 10) / 10 })
  }
  return data
}

export function getCurrentElectricityMetrics() {
  const now = new Date()
  const currentHour = now.getHours()
  
  // Pattern réaliste selon l'heure
  let powerMultiplier = 1.0
  if (currentHour >= 2 && currentHour <= 6) {
    powerMultiplier = 0.88 + (currentHour - 2) * 0.03
  } else if (currentHour >= 10 && currentHour <= 16) {
    powerMultiplier = 1.0 + (currentHour - 10) * 0.006
  } else if (currentHour >= 18 && currentHour <= 22) {
    powerMultiplier = 0.96 + (currentHour - 18) * 0.01
  } else {
    powerMultiplier = 0.92 + Math.abs(currentHour - 12) * 0.006
  }
  
  const basePower = 102.4
  const currentPower = basePower * powerMultiplier + (Math.random() * 1.5 - 0.75)
  
  // Tension corrélée avec la charge
  const voltageVariation = currentHour >= 8 && currentHour <= 18 ? -0.12 : 0.05
  const voltage = 33 + voltageVariation + (Math.random() * 0.2 - 0.1)
  
  const current = Math.round((currentPower * 1000000) / (1.732 * 33000))
  const efficiency = 93 + Math.random() * 4.5 // 93-97.5%
  const costPerHour = currentPower * 0.052 // Coût légèrement variable

  return {
    totalPowerMW: Math.round(currentPower * 10) / 10,
    voltageKV: Math.round(voltage * 10) / 10,
    currentA: current,
    efficiencyPercent: Math.round(efficiency * 10) / 10,
    costPerHourUSD: Math.round(costPerHour * 100) / 100
  }
}

// Bitcoin mining tracking data
export function generate24HourHashrate(): HourlyDataPoint[] {
  const data: HourlyDataPoint[] = []
  const baseHashrate = 500 // TH/s (estimated for 64 containers at ~7.8 TH/s each)
  const hours = 24

  for (let i = 0; i < hours; i++) {
    // Hashrate avec variations réalistes : légère baisse en journée (température)
    const hourOfDay = i
    let efficiencyFactor = 1.0
    
    // Légère variation selon l'heure (température ambiante affecte légèrement)
    if (hourOfDay >= 12 && hourOfDay <= 18) {
      // Après-midi : légère baisse due à température (98-99%)
      efficiencyFactor = 0.98 + (hourOfDay - 12) * 0.0017
    } else if (hourOfDay >= 2 && hourOfDay <= 6) {
      // Nuit : performance optimale (100-101%)
      efficiencyFactor = 1.0 + (hourOfDay - 2) * 0.0025
    } else {
      // Autres heures : performance normale (99-100%)
      efficiencyFactor = 0.99 + Math.abs(hourOfDay - 12) * 0.0008
    }
    
    // Variation aléatoire fine
    const randomVariation = 0.985 + Math.random() * 0.03
    // Petite oscillation pour courbe naturelle
    const smoothWave = Math.cos((i / 24) * Math.PI * 3) * 0.015
    
    const value = baseHashrate * efficiencyFactor * randomVariation + smoothWave * baseHashrate
    data.push({ hour: i, value: Math.round(value * 10) / 10 })
  }
  return data
}

export function generate24HourRevenue(): HourlyDataPoint[] {
  const data: HourlyDataPoint[] = []
  const baseRevenue = 0.5 // BTC per day (estimated)
  const hours = 24

  for (let i = 0; i < hours; i++) {
    // Revenus avec pattern réaliste : corrélé avec hashrate
    const hourOfDay = i
    
    // Pattern similaire au hashrate (performance affecte les revenus)
    let revenueFactor = 1.0
    if (hourOfDay >= 12 && hourOfDay <= 18) {
      revenueFactor = 0.97 + (hourOfDay - 12) * 0.002
    } else if (hourOfDay >= 2 && hourOfDay <= 6) {
      revenueFactor = 1.0 + (hourOfDay - 2) * 0.003
    } else {
      revenueFactor = 0.98 + Math.abs(hourOfDay - 12) * 0.001
    }
    
    // Variation aléatoire plus importante (marché Bitcoin volatile)
    const marketVolatility = 0.92 + Math.random() * 0.16
    // Oscillation pour simuler la volatilité du marché
    const marketWave = Math.sin((i / 24) * Math.PI * 5) * 0.04
    
    const hourlyRevenue = (baseRevenue / 24) * revenueFactor * marketVolatility
    const value = hourlyRevenue + marketWave * (baseRevenue / 24)
    data.push({ hour: i, value: Math.max(0, Math.round(value * 1000000) / 1000000) })
  }
  return data
}

export function generateTemperatureData(): HourlyDataPoint[] {
  const data: HourlyDataPoint[] = []
  const baseTemp = 25 // Celsius (cooled by hydro)
  const hours = 24

  for (let i = 0; i < hours; i++) {
    const hourOfDay = i
    
    // Pattern de température réaliste : plus froid la nuit, plus chaud en journée
    let ambientTemp = baseTemp
    
    if (hourOfDay >= 2 && hourOfDay <= 6) {
      // Nuit : température plus basse (20-23°C)
      ambientTemp = 20 + (hourOfDay - 2) * 0.75
    } else if (hourOfDay >= 12 && hourOfDay <= 16) {
      // Après-midi : température plus élevée (27-30°C)
      ambientTemp = 27 + (hourOfDay - 12) * 0.75
    } else if (hourOfDay >= 8 && hourOfDay <= 11) {
      // Matin : montée progressive (23-27°C)
      ambientTemp = 23 + (hourOfDay - 8) * 1.33
    } else if (hourOfDay >= 17 && hourOfDay <= 21) {
      // Soir : descente progressive (30-24°C)
      ambientTemp = 30 - (hourOfDay - 17) * 1.5
    } else {
      // Transition : interpolation
      ambientTemp = 24 + Math.sin((hourOfDay / 24) * Math.PI * 2) * 4
    }
    
    // Variation aléatoire fine
    const randomVariation = (Math.random() * 1.5 - 0.75)
    // Oscillation très légère
    const microWave = Math.cos((i / 24) * Math.PI * 4) * 0.5
    
    const value = ambientTemp + randomVariation + microWave
    data.push({ hour: i, value: Math.round(value * 10) / 10 })
  }
  return data
}

export function getCurrentMiningMetrics() {
  const now = new Date()
  const currentHour = now.getHours()
  
  // Hashrate avec pattern selon l'heure (température affecte performance)
  let hashrateMultiplier = 1.0
  if (currentHour >= 12 && currentHour <= 18) {
    hashrateMultiplier = 0.985 + (currentHour - 12) * 0.002
  } else if (currentHour >= 2 && currentHour <= 6) {
    hashrateMultiplier = 1.002 + (currentHour - 2) * 0.0005
  } else {
    hashrateMultiplier = 0.995 + Math.abs(currentHour - 12) * 0.0003
  }
  
  const baseHashrate = 500
  const hashrate = baseHashrate * hashrateMultiplier + (Math.random() * 15 - 7.5)
  
  // Conteneurs actifs (rarement tous en panne)
  const activeContainers = 64 - Math.floor(Math.random() * 1.5) // 63-64 active
  
  // Température selon l'heure
  let tempBase = 25
  if (currentHour >= 2 && currentHour <= 6) {
    tempBase = 21 + (currentHour - 2) * 0.5
  } else if (currentHour >= 12 && currentHour <= 16) {
    tempBase = 28 + (currentHour - 12) * 0.5
  } else if (currentHour >= 8 && currentHour <= 11) {
    tempBase = 24 + (currentHour - 8) * 1.33
  } else if (currentHour >= 17 && currentHour <= 21) {
    tempBase = 29 - (currentHour - 17) * 1.25
  } else {
    tempBase = 25 + Math.sin((currentHour / 24) * Math.PI * 2) * 3
  }
  
  const avgTemperature = tempBase + (Math.random() * 1.5 - 0.75)
  
  // Efficacité corrélée avec température
  const efficiency = 24.5 + (avgTemperature - 25) * 0.1 + (Math.random() * 1.5 - 0.75)
  
  // Revenus avec volatilité du marché
  const baseRevenueBTC = 0.5
  const marketFactor = 0.95 + Math.random() * 0.12 // Volatilité marché
  const dailyRevenueBTC = baseRevenueBTC * marketFactor * hashrateMultiplier
  const btcPrice = 45000 + (Math.random() * 5000 - 2500) // Prix variable
  const dailyRevenueUSD = dailyRevenueBTC * btcPrice

  return {
    hashrateTHs: Math.round(hashrate * 10) / 10,
    activeContainers,
    avgTemperature: Math.round(avgTemperature * 10) / 10,
    efficiencyJTH: Math.round(efficiency * 10) / 10,
    dailyRevenueBTC: Math.round(dailyRevenueBTC * 1000000) / 1000000,
    dailyRevenueUSD: Math.round(dailyRevenueUSD)
  }
}
