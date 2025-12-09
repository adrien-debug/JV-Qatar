'use client'

interface TransformerIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function TransformerIcon({ 
  size = 48, 
  color = 'currentColor',
  isActive = false 
}: TransformerIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Transformer Core */}
      <rect
        x="12"
        y="8"
        width="24"
        height="32"
        rx="2"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        opacity={isActive ? 0.2 : 1}
      />
      
      {/* Primary Coil (Top) */}
      <path
        d="M18 14 L18 18 M20 14 L20 18 M22 14 L22 18 M24 14 L24 18 M26 14 L26 18 M30 14 L30 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Secondary Coil (Bottom) */}
      <path
        d="M18 30 L18 34 M20 30 L20 34 M22 30 L22 34 M24 30 L24 34 M26 30 L26 34 M30 30 L30 34"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Connection Points */}
      <circle cx="24" cy="12" r="2" fill={color} />
      <circle cx="24" cy="36" r="2" fill={color} />
      
      {/* Glow effect when active */}
      {isActive && (
        <circle
          cx="24"
          cy="24"
          r="20"
          fill={color}
          opacity="0.1"
        />
      )}
    </svg>
  )
}

