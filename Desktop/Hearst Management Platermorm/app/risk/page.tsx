import DashboardLayout from '@/components/layout/DashboardLayout';
import RiskComplianceDashboard from '@/components/risk/RiskComplianceDashboard';
import styles from './page.module.css';

export default function RiskPage() {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Compliance</h1>
          <p className={styles.subtitle}>
            Monitor risk metrics, compliance status, and operational alerts across all products and mandates.
          </p>
        </div>
        <RiskComplianceDashboard />
      </div>
    </DashboardLayout>
  );
}



