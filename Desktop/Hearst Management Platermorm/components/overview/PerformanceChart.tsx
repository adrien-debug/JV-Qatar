'use client';

import React from 'react';
import { PerformanceDataPoint } from '@/lib/mock-overview';
import styles from './PerformanceChart.module.css';

interface PerformanceChartProps {
  data: PerformanceDataPoint[];
  height?: number;
}

export default function PerformanceChart({ data, height = 300 }: PerformanceChartProps) {
  const maxValue = Math.max(...data.map(d => Math.max(d.value, d.benchmark || 0)));
  const minValue = Math.min(...data.map(d => Math.min(d.value, d.benchmark || 0)));
  const range = maxValue - minValue;
  const padding = 40;
  const chartWidth = 800;
  const chartHeight = height;
  const graphWidth = chartWidth - padding * 2;
  const graphHeight = chartHeight - padding * 2;

  const getX = (index: number) => padding + (index / (data.length - 1)) * graphWidth;
  const getY = (value: number) => padding + graphHeight - ((value - minValue) / range) * graphHeight;

  const portfolioPath = data
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${getX(index)} ${getY(point.value)}`)
    .join(' ');

  const benchmarkPath = data
    .filter(d => d.benchmark !== undefined)
    .map((point, index) => {
      const originalIndex = data.findIndex(d => d === point);
      return `${index === 0 ? 'M' : 'L'} ${getX(originalIndex)} ${getY(point.benchmark!)}`;
    })
    .join(' ');

  const gridLines = 5;
  const gridValues: number[] = [];
  for (let i = 0; i <= gridLines; i++) {
    gridValues.push(minValue + (range / gridLines) * i);
  }

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <div>
          <h3 className={styles.chartTitle}>Performance Over Time</h3>
          <p className={styles.chartSubtitle}>Portfolio vs Benchmark (12M)</p>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ backgroundColor: '#10b981' }}></div>
            <span>Portfolio</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ backgroundColor: '#64748b' }}></div>
            <span>Benchmark</span>
          </div>
        </div>
      </div>
      <div className={styles.chartWrapper}>
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className={styles.chart}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Grid lines */}
          {gridValues.map((value, index) => (
            <g key={index}>
              <line
                x1={padding}
                y1={getY(value)}
                x2={chartWidth - padding}
                y2={getY(value)}
                stroke="var(--color-border-subtle)"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              <text
                x={padding - 10}
                y={getY(value) + 4}
                textAnchor="end"
                fontSize="11"
                fill="var(--color-text-muted)"
                className={styles.gridLabel}
              >
                {value.toFixed(1)}
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {data.map((point, index) => {
            if (index % 2 === 0) {
              return (
                <text
                  key={index}
                  x={getX(index)}
                  y={chartHeight - padding + 20}
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--color-text-muted)"
                  className={styles.axisLabel}
                >
                  {point.date.split('-')[1]}
                </text>
              );
            }
            return null;
          })}

          {/* Benchmark line */}
          {benchmarkPath && (
            <path
              d={benchmarkPath}
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="6 4"
              opacity="0.6"
            />
          )}

          {/* Portfolio line */}
          <path
            d={portfolioPath}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Portfolio area fill */}
          <path
            d={`${portfolioPath} L ${getX(data.length - 1)} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`}
            fill="url(#portfolioGradient)"
            opacity="0.1"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Data points */}
          {data.map((point, index) => (
            <g key={index}>
              <circle
                cx={getX(index)}
                cy={getY(point.value)}
                r="4"
                fill="#10b981"
                stroke="#ffffff"
                strokeWidth="2"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

