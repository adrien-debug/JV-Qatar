import DashboardLayout from '@/components/layout/DashboardLayout';
import MandatesTable from '@/components/mandates/MandatesTable';
import styles from './page.module.css';

export default function MandatesPage() {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Portfolio</h1>
          <p className={styles.subtitle}>
            Manage client mandates, portfolios, and allocations across all products.
          </p>
        </div>
        <MandatesTable />
      </div>
    </DashboardLayout>
  );
}



