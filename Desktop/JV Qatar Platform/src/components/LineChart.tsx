'use client'

import { useState, useEffect } from 'react'

interface LineChartProps {
  data: Array<{ hour: number; value: number }>
  maxValue: number
  title: string
  legend: string
  unit: string
  color?: string
}

export default function LineChart({ 
  data, 
  maxValue, 
  title, 
  legend, 
  unit,
  color = '#1E8449' 
}: LineChartProps) {
  const [animatedData, setAnimatedData] = useState(data)
  const [animationKey, setAnimationKey] = useState(0)
  
  useEffect(() => {
    // Animation fluide lors du changement de données
    setAnimatedData(data)
    setAnimationKey(prev => prev + 1)
  }, [data])

  const chartHeight = 280
  const padding = 40
  const chartAreaHeight = chartHeight - padding * 2

  // Trouver min, max, moyenne pour annotations
  const values = animatedData.map(d => d.value)
  const minValue = Math.min(...values)
  const maxValueData = Math.max(...values)
  const avgValue = values.reduce((a, b) => a + b, 0) / values.length
  const minIndex = values.indexOf(minValue)
  const maxIndex = values.indexOf(maxValueData)

  // Calculer les points pour le SVG (en pourcentage pour le responsive)
  const getXPercent = (i: number) => {
    const totalWidth = 100
    const leftMargin = (padding / 16) * 100
    const rightMargin = (padding / 16) * 100
    const availableWidth = totalWidth - leftMargin - rightMargin
    return leftMargin + (i / (data.length - 1)) * availableWidth
  }

  const getYPercent = (value: number) => {
    const totalHeight = 100
    const topMargin = (padding / chartHeight) * 100
    const bottomMargin = (padding / chartHeight) * 100
    const availableHeight = totalHeight - topMargin - bottomMargin
    return topMargin + (1 - value / maxValue) * availableHeight
  }

  const points = animatedData.map((point, i) => {
    const x = getXPercent(i)
    const y = getYPercent(point.value)
    return { x, y, value: point.value, hour: point.hour }
  })

  // Créer le path pour la zone ombrée
  const bottomY = 100 - (padding / chartHeight) * 100
  const areaPath = `M ${getXPercent(0)},${bottomY} ${points.map(p => `L ${p.x}%,${p.y}%`).join(' ')} L ${getXPercent(data.length - 1)},${bottomY} Z`
  
  // Créer le path pour la ligne
  const linePath = `M ${points.map(p => `${p.x}%,${p.y}%`).join(' L ')}`

  const formatValue = (val: number) => {
    if (val < 1 && val > 0) return val.toFixed(6)
    if (val < 10) return val.toFixed(2)
    return Math.round(val).toString()
  }

  return (
    <div style={{
      padding: '28px 32px',
      backgroundColor: '#FFFFFF',
      border: '1px solid #E5E5E5',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      fontFamily: 'var(--font-family-primary)',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'
    }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '24px',
        paddingBottom: '14px',
        borderBottom: '1px solid #F0F0F0'
      }}>
        <h3 style={{
          fontSize: '14px',
          color: '#1A1A1A',
          fontWeight: 600,
          margin: 0,
          letterSpacing: '0.3px',
          textTransform: 'uppercase'
        }}>
          {title}
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: `0 0 6px ${color}50`
          }} />
          <span style={{
            fontSize: '12px',
            color: '#666666',
            fontWeight: 500
          }}>
            {legend}
          </span>
        </div>
      </div>
      <div style={{
        position: 'relative',
        height: `${chartHeight}px`
      }}>
        <svg
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <defs>
            <linearGradient id={`gradient-${title.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.15" />
              <stop offset="100%" stopColor={color} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {/* Lignes de grille horizontales */}
          {[0, 25, 50, 75, 100].map((val) => {
            const y = getYPercent((val / 100) * maxValue)
            return (
              <line
                key={val}
                x1={`${getXPercent(0)}%`}
                y1={`${y}%`}
                x2={`${getXPercent(data.length - 1)}%`}
                y2={`${y}%`}
                stroke={val === 50 ? "#E0E0E0" : "#F5F5F5"}
                strokeWidth={val === 50 ? "1.5" : "1"}
                strokeDasharray={val === 50 ? "0" : "2,2"}
              />
            )
          })}
          {/* Lignes de grille verticales */}
          {animatedData.filter((_, i) => i % 6 === 0).map((point, idx) => {
            const x = getXPercent(animatedData.findIndex(p => p.hour === point.hour))
            return (
              <line
                key={`v-${idx}`}
                x1={`${x}%`}
                y1={`${(padding / chartHeight) * 100}%`}
                x2={`${x}%`}
                y2={`${bottomY}%`}
                stroke="#F5F5F5"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            )
          })}
          {/* Zone ombrée */}
          <path
            d={areaPath}
            fill={`url(#gradient-${title.replace(/\s/g, '')})`}
            style={{
              transition: 'd 0.5s ease-in-out',
              opacity: 0.8
            }}
          />
          {/* Ligne principale */}
          <path
            d={linePath}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#shadow)"
            style={{
              transition: 'd 0.5s ease-in-out'
            }}
            key={animationKey}
          />
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor={color} floodOpacity="0.3"/>
            </filter>
          </defs>
          {/* Points et annotations de données */}
          {points.map((point, i) => {
            if (i === minIndex || i === maxIndex || i === 0 || i === points.length - 1 || i % 6 === 0) {
              return (
                <g key={i}>
                  <circle
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r="4"
                    fill={color}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    style={{ filter: `drop-shadow(0 2px 4px ${color}50)` }}
                  />
                  {/* Ligne verticale de référence */}
                  <line
                    x1={`${point.x}%`}
                    y1={`${point.y}%`}
                    x2={`${point.x}%`}
                    y2={`${bottomY}%`}
                    stroke="#E5E5E5"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    opacity="0.5"
                  />
                  {/* Annotation de valeur */}
                  <text
                    x={`${point.x}%`}
                    y={`${point.y}%`}
                    dy="-12"
                    textAnchor="middle"
                    fontSize="11px"
                    fill="#1A1A1A"
                    fontWeight="600"
                    fontFamily="var(--font-family-primary)"
                    style={{
                      textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    {formatValue(point.value)} {unit}
                  </text>
                </g>
              )
            }
            return null
          })}
        </svg>
        {/* Axe Y */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: padding,
          bottom: padding,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontSize: '10px',
          color: '#999999',
          fontWeight: 400,
          width: '40px',
          fontFamily: 'var(--font-family-primary)'
        }}>
          {[0, 25, 50, 75, 100].map((val) => {
            const value = (val / 100) * maxValue
            return (
              <span key={val} style={{ lineHeight: '1.2' }}>
                {formatValue(value)}
              </span>
            )
          })}
        </div>
        {/* Axe X */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: padding,
          right: padding,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '10px',
          color: '#999999',
          fontWeight: 400,
          paddingTop: '8px',
          fontFamily: 'var(--font-family-primary)'
        }}>
          {animatedData.filter((_, i) => i % 6 === 0).map((point) => (
            <span key={point.hour} style={{ lineHeight: '1.2' }}>{point.hour}h</span>
          ))}
        </div>
        {/* Statistiques en bas */}
        <div style={{
          position: 'absolute',
          bottom: '36px',
          left: padding,
          right: padding,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '10px',
          color: '#666666',
          fontWeight: 400,
          fontFamily: 'var(--font-family-primary)',
          paddingTop: '4px',
          borderTop: '1px solid #F0F0F0'
        }}>
          <span>Min: {formatValue(minValue)} {unit}</span>
          <span>Moy: {formatValue(avgValue)} {unit}</span>
          <span>Max: {formatValue(maxValueData)} {unit}</span>
        </div>
      </div>
    </div>
  )
}
