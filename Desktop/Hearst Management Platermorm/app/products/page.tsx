import DashboardLayout from '@/components/layout/DashboardLayout';
import ProductShelf from '@/components/products/ProductShelf';
import styles from './page.module.css';

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Products</h1>
          <p className={styles.subtitle}>
            Browse all available products across Market, Mining-Enhanced, and Bouquet families.
          </p>
        </div>
      <ProductShelf />
      </div>
    </DashboardLayout>
  );
}



