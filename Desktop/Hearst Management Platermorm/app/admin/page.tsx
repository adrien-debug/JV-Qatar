import DashboardLayout from '@/components/layout/DashboardLayout';
import AdminDashboard from '@/components/admin/AdminDashboard';
import styles from './page.module.css';

export default function AdminPage() {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Admin</h1>
          <p className={styles.subtitle}>
            Manage platform configuration, users, security, and system settings.
          </p>
        </div>
        <AdminDashboard />
      </div>
    </DashboardLayout>
  );
}



