import DashboardLayout from '@/components/layout/DashboardLayout';
import ReportsTable from '@/components/reports/ReportsTable';
import styles from './page.module.css';

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Reports</h1>
          <p className={styles.subtitle}>
            Generate, schedule, and manage reports across all products, mandates, and operational areas.
          </p>
        </div>
        <ReportsTable />
      </div>
    </DashboardLayout>
  );
}



