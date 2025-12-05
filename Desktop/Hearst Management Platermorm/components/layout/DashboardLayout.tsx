'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Topbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
