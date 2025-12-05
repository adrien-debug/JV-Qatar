'use client';

import React from 'react';
import { AllocationData } from '@/lib/mock-overview';
import styles from './AllocationChart.module.css';

interface AllocationChartProps {
  data: AllocationData[];
}

export default function AllocationChart({ data }: AllocationChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = 80;
  const centerX = 120;
  const centerY = 120;
  let currentAngle = -90;

  const createArc = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return `M ${centerX} ${centerY} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const segments = data.map((item) => {
    const startAngle = currentAngle;
    const endAngle = currentAngle + (item.percentage / 100) * 360;
    currentAngle = endAngle;
    return { ...item, startAngle, endAngle };
  });

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <h3 className={styles.chartTitle}>AUM Allocation</h3>
        <p className={styles.chartSubtitle}>By Product Category</p>
      </div>
      <div className={styles.chartContent}>
        <div className={styles.pieChart}>
          <svg viewBox="0 0 240 240" className={styles.chart}>
            {segments.map((segment, index) => (
              <path
                key={index}
                d={createArc(segment.startAngle, segment.endAngle)}
                fill={segment.color}
                stroke="#ffffff"
                strokeWidth="2"
                className={styles.segment}
              />
            ))}
          </svg>
        </div>
        <div className={styles.legend}>
          {data.map((item, index) => (
            <div key={index} className={styles.legendItem}>
              <div className={styles.legendRow}>
                <div className={styles.legendLeft}>
                  <div
                    className={styles.legendDot}
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className={styles.legendLabel}>{item.category}</span>
                </div>
                <div className={styles.legendRight}>
                  <span className={styles.legendValue}>
                    ${(item.value / 1000000).toFixed(0)}M
                  </span>
                  <span className={styles.legendPercentage}>
                    {item.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

