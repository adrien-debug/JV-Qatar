'use client';

import React from 'react';

interface MobileMenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function MobileMenuButton({ onClick, isOpen }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 60,
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        backgroundColor: 'var(--color-bg)',
        color: 'rgba(16, 185, 129, 0.9)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontSize: '1.25rem'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-bg)';
      }}
      aria-label="Toggle menu"
    >
      {isOpen ? '✕' : '☰'}
    </button>
  );
}

