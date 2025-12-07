'use client';

import React from 'react';
import styles from './AllocationDonut.module.css';
import { mockAllocationData } from '@/lib/mock-overview';

const RADIUS = 104;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function AllocationDonut() {
  const total = mockAllocationData.reduce((sum, d) => sum + d.value, 0);

  let offset = 0;
  const segments = mockAllocationData.map((item) => {
    const pct = item.value / total;
    const length = pct * CIRCUMFERENCE;
    const dasharray = `${length} ${CIRCUMFERENCE - length}`;
    const dashoffset = offset;
    offset -= length;
    return { ...item, dasharray, dashoffset, pct: pct * 100 };
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Donut D10X</h3>
        <p className={styles.subtitle}>Répartition par stratégie</p>
      </div>

      <div className={styles.content}>
        <div className={styles.donutWrapper}>
          <svg viewBox="0 0 270 270" className={styles.donut} role="img" aria-label="Asset distribution donut chart">
            <defs>
              <linearGradient id="donut-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-chart-green-1)" />
                <stop offset="100%" stopColor="var(--color-chart-green-3)" />
              </linearGradient>
              <linearGradient id="donut-gray" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
              <linearGradient id="donut-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
            </defs>
            <circle className={styles.donutTrack} cx="135" cy="135" r={RADIUS} />
            {segments.map((seg, idx) => {
              const stroke =
                idx === 0
                  ? 'url(#donut-green)'
                  : idx === 1
                  ? 'url(#donut-gray)'
                  : 'url(#donut-dark)';
              return (
                <g key={seg.category} className={styles.segmentGroup}>
                  <circle
                    className={styles.donutSegmentGlow}
                    cx="135"
                    cy="135"
                    r={RADIUS}
                    stroke={stroke}
                    strokeDasharray={seg.dasharray}
                    strokeDashoffset={seg.dashoffset}
                  />
                  <circle
                    className={styles.donutSegment}
                    cx="135"
                    cy="135"
                    r={RADIUS}
                    stroke={stroke}
                    strokeDasharray={seg.dasharray}
                    strokeDashoffset={seg.dashoffset}
                  />
                  <circle
                    className={styles.donutSegmentInner}
                    cx="135"
                    cy="135"
                    r={RADIUS}
                    stroke={stroke}
                    strokeDasharray={seg.dasharray}
                    strokeDashoffset={seg.dashoffset}
                  />
                </g>
              );
            })}
            <text x="135" y="129" textAnchor="middle" className={styles.centerValue}>
              {Math.round((mockAllocationData[0]?.value / total) * 100)}%
            </text>
            <text x="135" y="157" textAnchor="middle" className={styles.centerLabel}>
              Market
            </text>
          </svg>
        </div>

        <div className={styles.legend}>
          {segments.map((seg, idx) => (
            <div key={seg.category} className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{
                  background:
                    idx === 0
                      ? 'var(--color-chart-green-1)'
                      : idx === 1
                      ? 'linear-gradient(135deg, #f1f5f9, #9ca3af)'
                      : '#000000'
                }}
              />
              <div className={styles.legendTexts}>
                <span className={styles.legendLabel}>{seg.category}</span>
                <span className={styles.legendValue}>
                  {seg.pct.toFixed(0)}% · ${(seg.value / 1_000_000).toFixed(0)}M
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

