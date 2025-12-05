'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenuButton from './MobileMenuButton';
import styles from './Sidebar.module.css';

const menuItems = [
  { label: 'Overview', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Mandates & Portfolios', path: '/mandates' },
  { label: 'Execution', path: '/execution' },
  { label: 'Risk & Compliance', path: '/risk' },
  { label: 'Reports', path: '/reports' },
  { label: 'Admin', path: '/admin' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobileOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen, isMobile]);

  const sidebarClasses = [
    styles.sidebar,
    isCollapsed && !isMobile ? styles.sidebarCollapsed : '',
    isMobile && !isMobileOpen ? styles.sidebarHidden : '',
    isMobile && isMobileOpen ? styles.sidebarOpen : ''
  ].filter(Boolean).join(' ');

  return (
    <>
      {isMobile && (
        <MobileMenuButton 
          onClick={() => setIsMobileOpen(!isMobileOpen)} 
          isOpen={isMobileOpen}
        />
      )}
      {isMobile && isMobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 49,
          }}
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <aside className={sidebarClasses}>
        <div className={styles.sidebarContent}>
          {/* Logo */}
          <div className={styles.logo}>
            {isCollapsed && !isMobile ? (
              <img
                src="/HEARST_LOGO%20(1).png"
                alt="Logo"
                width={32}
                height={32}
                className={styles.logoImageCollapsed}
                style={{ display: 'block' }}
              />
            ) : (
              <img
                src="/HEARST_LOGO.png"
                alt="Hearst Logo"
                className={styles.logoImageOpen}
                style={{ display: 'block' }}
              />
            )}
          </div>

          {/* Toggle button - Desktop only */}
          {!isMobile && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={styles.toggleButton}
              aria-label="Toggle sidebar"
            >
              {isCollapsed ? '→' : '←'}
            </button>
          )}

          {/* Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path} className={styles.navItem}>
                    <Link
                      href={item.path}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                      onClick={() => isMobile && setIsMobileOpen(false)}
                    >
                      <span className={styles.navIcon}>{item.label.charAt(0)}</span>
                      {(!isCollapsed || isMobile) && <span>{item.label}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
