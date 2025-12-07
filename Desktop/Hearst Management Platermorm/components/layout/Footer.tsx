'use client';

import React from 'react';
import { useSidebar } from './SidebarContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { isCollapsed, isMobile, isTablet, isLargeScreen } = useSidebar();
  
  // Calculer la marge gauche selon l'état de la sidebar
  const getFooterLeft = () => {
    if (isMobile) return 0;
    if (isCollapsed) {
      if (isTablet) return '70px';
      return '80px';
    }
    if (isTablet) return '200px';
    if (isLargeScreen) return '240px';
    return '220px';
  };

  return (
    <footer 
      className={styles.footer}
      style={{
        marginLeft: getFooterLeft(),
        width: isMobile ? '100%' : `calc(100% - ${getFooterLeft()})`,
      }}
    >
      <div className={styles.content}>
        <p className={styles.text}>© {new Date().getFullYear()} Hearst Management Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}

