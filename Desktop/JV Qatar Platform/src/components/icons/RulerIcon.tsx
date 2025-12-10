'use client'

interface RulerIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function RulerIcon({ 
  size = 24, 
  color = 'currentColor',
  isActive = false 
}: RulerIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="8"
        width="20"
        height="8"
        rx="1"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        opacity={isActive ? 0.15 : 1}
      />
      <line x1="4" y1="10" x2="4" y2="14" stroke={color} strokeWidth="1.5" />
      <line x1="8" y1="10" x2="8" y2="14" stroke={color} strokeWidth="1.5" />
      <line x1="12" y1="10" x2="12" y2="14" stroke={color} strokeWidth="1.5" />
      <line x1="16" y1="10" x2="16" y2="14" stroke={color} strokeWidth="1.5" />
      <line x1="20" y1="10" x2="20" y2="14" stroke={color} strokeWidth="1.5" />
      {isActive && (
        <circle
          cx="12"
          cy="12"
          r="11"
          fill={color}
          opacity="0.1"
        />
      )}
    </svg>
  )
}
