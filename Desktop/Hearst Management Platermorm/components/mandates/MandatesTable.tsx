'use client';

import React, { useState } from 'react';
import { Mandate } from '@/lib/mock-mandates';
import { mockMandates } from '@/lib/mock-mandates';
import { formatCurrency, formatDate } from '@/lib/format';
import Modal from '@/components/ui/Modal';
import MandateDetail from './MandateDetail';
import styles from './MandatesTable.module.css';

const typeLabels = {
  sovereign: 'Sovereign',
  institutional: 'Institutional',
  corporate: 'Corporate',
  'family-office': 'Family Office'
};

const statusColors = {
  active: 'var(--color-success)',
  pending: 'var(--color-warning)',
  closed: 'var(--color-text-muted)'
};

const riskProfileColors = {
  conservative: 'var(--color-accent)',
  moderate: 'var(--color-success)',
  aggressive: 'var(--color-warning)'
};


export default function MandatesTable() {
  const [filterStatus, setFilterStatus] = useState<'all' | Mandate['status']>('all');
  const [filterType, setFilterType] = useState<'all' | Mandate['type']>('all');
  const [selectedMandate, setSelectedMandate] = useState<Mandate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMandates = mockMandates.filter(mandate => {
    const statusMatch = filterStatus === 'all' || mandate.status === filterStatus;
    const typeMatch = filterType === 'all' || mandate.type === filterType;
    return statusMatch && typeMatch;
  });

  const totalAUM = filteredMandates.reduce((sum, m) => sum + m.aum, 0);
  const activeCount = filteredMandates.filter(m => m.status === 'active').length;
  const pendingCount = filteredMandates.filter(m => m.status === 'pending').length;
  const avgYTD = filteredMandates.length > 0 
    ? filteredMandates.reduce((sum, m) => sum + m.ytdPerformance, 0) / filteredMandates.length 
    : 0;

  return (
    <>
      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Status</span>
          <button
            onClick={() => setFilterStatus('all')}
            className={`${styles.filterButton} ${filterStatus === 'all' ? styles.filterButtonActive : styles.filterButtonInactive}`}
          >
            All
          </button>
          <button
            onClick={() => setFilterStatus('active')}
            className={`${styles.filterButton} ${filterStatus === 'active' ? styles.filterButtonActive : styles.filterButtonInactive}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilterStatus('pending')}
            className={`${styles.filterButton} ${filterStatus === 'pending' ? styles.filterButtonActive : styles.filterButtonInactive}`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilterStatus('closed')}
            className={`${styles.filterButton} ${filterStatus === 'closed' ? styles.filterButtonActive : styles.filterButtonInactive}`}
          >
            Closed
          </button>
        </div>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Type</span>
          <button
            onClick={() => setFilterType('all')}
            className={`${styles.filterButton} ${filterType === 'all' ? styles.filterButtonActive : styles.filterButtonInactive}`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType('sovereign')}
            className={`${styles.filterButton} ${filterType === 'sovereign' ? styles.filterButtonActive : styles.filterButtonInactive}`}
          >
            Sovereign
          </button>
          <button
            onClick={() => setFilterType('institutional')}
            className={`${styles.filterButton} ${filterType === 'institutional' ? styles.filterButtonActive : styles.filterButtonInactive}`}
          >
            Institutional
          </button>
          <button
            onClick={() => setFilterType('corporate')}
            className={`${styles.filterButton} ${filterType === 'corporate' ? styles.filterButtonActive : styles.filterButtonInactive}`}
          >
            Corporate
          </button>
          <button
            onClick={() => setFilterType('family-office')}
            className={`${styles.filterButton} ${filterType === 'family-office' ? styles.filterButtonActive : styles.filterButtonInactive}`}
          >
            Family Office
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryCards}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryLabel}>Total AUM</div>
          <div className={styles.summaryValue}>{formatCurrency(totalAUM)}</div>
        </div>
        <div className={styles.summaryCard}>
          <div className={styles.summaryLabel}>Average YTD</div>
          <div className={styles.summaryValue} style={{ color: 'var(--color-success)' }}>
            +{avgYTD.toFixed(1)}%
          </div>
        </div>
        <div className={styles.summaryCard}>
          <div className={styles.summaryLabel}>Active</div>
          <div className={styles.summaryValue} style={{ color: 'var(--color-success)' }}>
            {activeCount}
          </div>
        </div>
        <div className={styles.summaryCard}>
          <div className={styles.summaryLabel}>Pending</div>
          <div className={styles.summaryValue} style={{ color: 'var(--color-warning)' }}>
            {pendingCount}
          </div>
        </div>
      </div>

      {/* Mandates Table - Simplified */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tableHeaderRow}>
              <th className={styles.tableHeaderCell}>Name</th>
              <th className={styles.tableHeaderCell}>Type</th>
              <th className={styles.tableHeaderCell} style={{ textAlign: 'right' }}>AUM</th>
              <th className={styles.tableHeaderCell} style={{ textAlign: 'right' }}>YTD</th>
              <th className={styles.tableHeaderCell} style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMandates.map((mandate) => (
              <tr 
                key={mandate.id} 
                className={styles.tableBodyRow}
                onClick={() => {
                  setSelectedMandate(mandate);
                  setIsModalOpen(true);
                }}
              >
                <td className={styles.tableCell}>
                  <div className={styles.mandateName}>{mandate.name}</div>
                  <div className={styles.clientName}>{mandate.clientName}</div>
                </td>
                <td className={styles.tableCell}>
                  <span className={styles.typeBadge} data-type={mandate.type}>
                    {typeLabels[mandate.type]}
                  </span>
                </td>
                <td className={`${styles.tableCell} ${styles.tableCellMetric}`}>
                  {formatCurrency(mandate.aum)}
                </td>
                <td className={`${styles.tableCell} ${styles.tableCellMetric}`}>
                  <span style={{ color: mandate.ytdPerformance >= 0 ? 'var(--color-success)' : 'var(--color-danger)' }}>
                    {mandate.ytdPerformance > 0 ? '+' : ''}{mandate.ytdPerformance.toFixed(1)}%
                  </span>
                </td>
                <td className={styles.tableCell} style={{ textAlign: 'center' }}>
                  <button 
                    className={styles.actionButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMandate(mandate);
                      setIsModalOpen(true);
                    }}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedMandate(null);
        }}
        title={selectedMandate?.name}
      >
        {selectedMandate && <MandateDetail mandate={selectedMandate} />}
      </Modal>

      {filteredMandates.length === 0 && (
        <div className={styles.emptyState}>
          No mandates found for the selected filters.
        </div>
      )}
    </>
  );
}
