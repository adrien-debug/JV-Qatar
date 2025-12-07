'use client';

import React from 'react';
import { RiskMetric } from '@/lib/mock-risk';
import Card from '@/components/ui/Card';
import styles from './RiskDetail.module.css';

interface RiskDetailProps {
  metric: RiskMetric;
}

export default function RiskDetail({ metric }: RiskDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.metricsGrid}>
        <Card className={styles.metricCard}>
          <div className={styles.metricLabel}>Risk Level</div>
          <div className={styles.metricValue} style={{ 
            color: metric.riskLevel === 'low' ? 'var(--color-success)' : 
                   metric.riskLevel === 'medium' ? 'var(--color-warning)' :
                   metric.riskLevel === 'high' ? 'var(--color-danger)' : '#991b1b'
          }}>
            {metric.riskLevel.toUpperCase()}
          </div>
        </Card>
        <Card className={styles.metricCard}>
          <div className={styles.metricLabel}>Volatility</div>
          <div className={styles.metricValue}>{metric.volatility.toFixed(1)}%</div>
        </Card>
        <Card className={styles.metricCard}>
          <div className={styles.metricLabel}>Max Drawdown</div>
          <div className={styles.metricValue} style={{ color: 'var(--color-danger)' }}>
            {metric.maxDrawdown.toFixed(1)}%
          </div>
        </Card>
        <Card className={styles.metricCard}>
          <div className={styles.metricLabel}>Sharpe Ratio</div>
          <div className={styles.metricValue}>{metric.sharpeRatio.toFixed(2)}</div>
        </Card>
        <Card className={styles.metricCard}>
          <div className={styles.metricLabel}>Beta</div>
          <div className={styles.metricValue}>{metric.beta.toFixed(2)}</div>
        </Card>
        <Card className={styles.metricCard}>
          <div className={styles.metricLabel}>VaR 95%</div>
          <div className={styles.metricValue} style={{ color: 'var(--color-danger)' }}>
            {metric.var95.toFixed(1)}%
          </div>
        </Card>
        <Card className={styles.metricCard}>
          <div className={styles.metricLabel}>Stress Score</div>
          <div className={styles.metricValue} style={{ 
            color: metric.stressTestScore >= 70 ? 'var(--color-success)' : 
                   metric.stressTestScore >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'
          }}>
            {metric.stressTestScore}
          </div>
        </Card>
      </div>
      <Card>
        <h3 className={styles.sectionTitle}>Product Information</h3>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Product</span>
            <span className={styles.infoValue}>{metric.productName}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Type</span>
            <span className={styles.infoValue}>{metric.type.charAt(0).toUpperCase() + metric.type.slice(1)}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Last Updated</span>
            <span className={styles.infoValue}>
              {new Date(metric.lastUpdated).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

