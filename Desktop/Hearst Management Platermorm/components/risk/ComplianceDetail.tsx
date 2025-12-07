'use client';

import React from 'react';
import { ComplianceCheck } from '@/lib/mock-risk';
import Card from '@/components/ui/Card';
import styles from './ComplianceDetail.module.css';

interface ComplianceDetailProps {
  check: ComplianceCheck;
}

export default function ComplianceDetail({ check }: ComplianceDetailProps) {
  const statusColors = {
    compliant: 'var(--color-success)',
    warning: 'var(--color-warning)',
    'non-compliant': 'var(--color-danger)',
    pending: 'var(--color-text-muted)'
  };

  const riskLevelColors = {
    low: 'var(--color-success)',
    medium: 'var(--color-warning)',
    high: 'var(--color-danger)',
    critical: '#991b1b'
  };

  return (
    <div className={styles.container}>
      <Card>
        <h3 className={styles.sectionTitle}>Compliance Information</h3>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Check Name</span>
            <span className={styles.infoValue}>{check.name}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Type</span>
            <span className={styles.infoValue}>{check.type.charAt(0).toUpperCase() + check.type.slice(1)}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Status</span>
            <span className={styles.infoValue} style={{ color: statusColors[check.status] }}>
              {check.status.charAt(0).toUpperCase() + check.status.slice(1)}
            </span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Severity</span>
            <span className={styles.infoValue} style={{ color: riskLevelColors[check.severity] }}>
              {check.severity.toUpperCase()}
            </span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Jurisdiction</span>
            <span className={styles.infoValue}>{check.jurisdiction}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Entity</span>
            <span className={styles.infoValue}>{check.productName || check.mandateName || 'Global'}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Last Checked</span>
            <span className={styles.infoValue}>
              {new Date(check.lastChecked).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Next Review</span>
            <span className={styles.infoValue}>
              {new Date(check.nextReview).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </Card>
      <Card>
        <h3 className={styles.sectionTitle}>Description</h3>
        <p className={styles.description}>{check.description}</p>
      </Card>
    </div>
  );
}

