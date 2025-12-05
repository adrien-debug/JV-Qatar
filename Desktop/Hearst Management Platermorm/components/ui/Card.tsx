'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = '', onClick }: CardProps) {
  const baseClass = 'card';
  const clickableClass = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseClass} ${clickableClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

