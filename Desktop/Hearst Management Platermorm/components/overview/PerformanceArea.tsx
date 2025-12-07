'use client';

import React from 'react';
import { PerformanceDataPoint } from '@/lib/mock-overview';
import styles from './PerformanceArea.module.css';

interface PerformanceAreaProps {
  data: PerformanceDataPoint[];
}

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getMonthLabel = (isoMonth: string) => {
  const monthPart = isoMonth?.split?.('-')?.[1];
  const monthIndex = Math.max(0, Math.min(11, Number(monthPart ?? 1) - 1));
  return MONTH_LABELS[monthIndex] ?? '';
};

export default function PerformanceArea({ data }: PerformanceAreaProps) {
  const width = 800;
  const height = 370;
  const paddingX = 56;
  const paddingY = 36; // marge interne haute
  const baselineY = height - 30; // laisse de la place pour les labels mois
  const innerWidth = width - paddingX * 2;
  const innerHeight = baselineY - paddingY;

  if (!data.length) return null;

  const baseValue = data[0].value || 1;
  const normalized = data.map((d) => ({
    ...d,
    pct: ((d.value / baseValue) - 1) * 100,
    pctBenchmark: d.benchmark !== undefined ? ((d.benchmark / baseValue) - 1) * 100 : undefined,
  }));

  // Aligner les niveaux de grilles sur le même calcul que le barchart (portfolio uniquement)
  const primaryValues = normalized.map((d) => d.pct);
  const maxVal = Math.max(...primaryValues, 0);
  const minVal = Math.min(...primaryValues, 0);
  const paddedMax = Math.ceil(maxVal / 5) * 5;
  const paddedMin = Math.floor(minVal / 5) * 5;
  const range = Math.max(paddedMax - paddedMin, 1);

  const yTicks: number[] = [];
  const steps = 4;
  for (let i = 0; i <= steps; i++) {
    const v = paddedMin + (range / steps) * i;
    yTicks.push(Math.round(v));
  }

  const mapPoints = (values: number[]) =>
    values.map((val, index) => {
      const x = paddingX + (innerWidth / Math.max(1, values.length - 1)) * index;
      const y = paddingY + (1 - (val - paddedMin) / range) * innerHeight;
      return { x, y, val };
    });

  const secondaryValues = normalized.map((d) => d.pctBenchmark ?? d.pct * 0.9);

  const primaryPoints = mapPoints(primaryValues);
  const secondaryPoints = mapPoints(secondaryValues);

  const pathFromPoints = (pts: { x: number; y: number }[]) =>
    pts.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ');

  const primaryPath = pathFromPoints(primaryPoints);
  const secondaryPath = pathFromPoints(secondaryPoints);

  const primaryArea = `${primaryPath} L ${paddingX + innerWidth} ${baselineY} L ${paddingX} ${baselineY} Z`;
  const secondaryArea = `${secondaryPath} L ${paddingX + innerWidth} ${baselineY} L ${paddingX} ${baselineY} Z`;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerTexts}>
          <h3 className={styles.title}>Performance (aire)</h3>
          <p className={styles.subtitle}>Portefeuille vs benchmark (en %)</p>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendDotPrimary} />
            <span>Portfolio</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDotSecondary} />
            <span>Benchmark</span>
          </div>
        </div>
      </div>

      <div className={styles.chartWrapper}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className={styles.chart}
          role="img"
          aria-label="Performance area chart"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="area-primary" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-chart-green-1)" stopOpacity="0.65" />
              <stop offset="100%" stopColor="var(--color-chart-green-4)" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="area-secondary" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {yTicks.map((tick) => {
            const y = paddingY + (1 - (tick - paddedMin) / range) * innerHeight;
            return (
              <g key={`grid-${tick}`}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={paddingX + innerWidth}
                  y2={y}
                  className={styles.gridLine}
                />
                <text
                  x={paddingX - 10}
                  y={y + 4}
                  textAnchor="end"
                  className={styles.axisLabel}
                >
                  {tick}%
                </text>
              </g>
            );
          })}

          {/* X labels */}
          {primaryPoints.map((p, idx) => (
            <text
              key={`label-${idx}`}
              x={p.x}
              y={baselineY + 22}
              textAnchor="middle"
              className={styles.axisLabel}
            >
              {getMonthLabel(data[idx].date)}
            </text>
          ))}

          {/* Baseline */}
          <line
            x1={paddingX}
            y1={baselineY}
            x2={paddingX + innerWidth}
            y2={baselineY}
            className={styles.axisLine}
          />

          {/* Areas */}
          <path d={secondaryArea} className={styles.areaSecondary} />
          <path d={primaryArea} className={styles.areaPrimary} />

          {/* Lines */}
          <path d={secondaryPath} className={styles.lineSecondary} />
          <path d={primaryPath} className={styles.linePrimary} />

          {/* Points */}
          {secondaryPoints.map((p, idx) => {
            if (idx % 2 !== 0) return null;
            return (
              <circle
                key={`s-dot-${idx}`}
                cx={p.x}
                cy={p.y}
                r={5}
                className={`${styles.dot} ${styles.dotSecondary}`}
              />
            );
          })}
          {primaryPoints.map((p, idx) => {
            if (idx % 2 !== 0) return null;
            return (
              <g key={`p-dot-${idx}`}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={6}
                  className={`${styles.dot} ${styles.dotPrimary}`}
                />
                <text
                  x={p.x}
                  y={p.y - 12}
                  textAnchor="middle"
                  className={styles.valueLabel}
                >
                  {normalized[idx].pct.toFixed(1)}%
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

