import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import { mockProducts } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/format';
import {
  mockPerformanceData,
  mockTopPerformers
} from '@/lib/mock-overview';
import HeroPerformanceCurve from '@/components/overview/HeroPerformanceCurve';
import PerformanceTable from '@/components/overview/PerformanceTable';
import TopPerformers from '@/components/overview/TopPerformers';
import styles from './page.module.css';

export default function HomePage() {
  const totalAUM = mockProducts.reduce((sum, p) => sum + p.aum, 0);
  const avgYTD = mockProducts.reduce((sum, p) => sum + p.ytdPerformance, 0) / mockProducts.length;
  const marketProducts = mockProducts.filter(p => p.type === 'market').length;
  const miningProducts = mockProducts.filter(p => p.type === 'mining').length;
  const bouquetProducts = mockProducts.filter(p => p.type === 'bouquet').length;

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Overview</h1>
          <p className={styles.subtitle}>
            Comprehensive view of platform performance, allocations, and key metrics
          </p>
        </div>

        {/* Key Metrics - Horizontal */}
        <div className={styles.metricsGrid}>
          <Card className={styles.metricCard}>
            <div className={styles.metricLabel}>Total AUM</div>
            <div className={styles.metricValue}>{formatCurrency(totalAUM)}</div>
            <div className={styles.metricChange}>+12.4% vs last quarter</div>
          </Card>
          <Card className={styles.metricCard}>
            <div className={styles.metricLabel}>Average YTD</div>
            <div className={`${styles.metricValue} ${styles.metricValueSuccess}`}>
              +{avgYTD.toFixed(1)}%
            </div>
            <div className={styles.metricChange}>+2.1% vs benchmark</div>
          </Card>
          <Card className={styles.metricCard}>
            <div className={styles.metricLabel}>Total Products</div>
            <div className={styles.metricValue}>{mockProducts.length}</div>
            <div className={styles.metricChange}>{marketProducts + miningProducts + bouquetProducts} active</div>
          </Card>
          <Card className={styles.metricCard}>
            <div className={styles.metricLabel}>Active Strategies</div>
            <div className={styles.metricValue}>{mockProducts.length}</div>
            <div className={styles.metricChange}>All performing</div>
          </Card>
        </div>

        {/* Hero Performance Curve */}
        <HeroPerformanceCurve data={mockPerformanceData} totalAUM={totalAUM} avgYTD={avgYTD} />

        {/* Performance Table */}
        <PerformanceTable data={mockPerformanceData} />

        {/* Top Performers */}
        <TopPerformers data={mockTopPerformers} />
      </div>
    </DashboardLayout>
  );
}



