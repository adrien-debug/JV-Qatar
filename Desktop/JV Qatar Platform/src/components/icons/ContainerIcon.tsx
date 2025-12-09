'use client'

interface ContainerIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function ContainerIcon({ 
  size = 40, 
  color = 'currentColor',
  isActive = false 
}: ContainerIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Container Body */}
      <rect
        x="4"
        y="8"
        width="32"
        height="24"
        rx="2"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        opacity={isActive ? 0.15 : 1}
      />
      
      {/* Ventilation Grilles */}
      <line x1="10" y1="14" x2="30" y2="14" stroke={color} strokeWidth="1.5" />
      <line x1="10" y1="18" x2="30" y2="18" stroke={color} strokeWidth="1.5" />
      <line x1="10" y1="22" x2="30" y2="22" stroke={color} strokeWidth="1.5" />
      <line x1="10" y1="26" x2="30" y2="26" stroke={color} strokeWidth="1.5" />
      
      {/* Door Handle */}
      <circle cx="32" cy="20" r="2" fill={color} />
      
      {/* Power Indicator */}
      <circle
        cx="8"
        cy="12"
        r="2"
        fill={isActive ? color : 'var(--color-text-muted)'}
        opacity={isActive ? 1 : 0.5}
      />
      
      {/* Glow effect when active */}
      {isActive && (
        <circle
          cx="20"
          cy="20"
          r="18"
          fill={color}
          opacity="0.1"
        />
      )}
    </svg>
  )
}

