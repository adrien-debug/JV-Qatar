import DashboardLayout from '@/components/layout/DashboardLayout';
import ExecutionsTable from '@/components/execution/ExecutionsTable';
import styles from './page.module.css';

export default function ExecutionPage() {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Execution</h1>
          <p className={styles.subtitle}>
            Monitor and manage trade executions across all products and mandates.
          </p>
        </div>
        <ExecutionsTable />
      </div>
    </DashboardLayout>
  );
}



