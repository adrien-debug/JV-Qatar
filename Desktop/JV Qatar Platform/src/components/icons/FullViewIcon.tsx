'use client'

interface FullViewIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function FullViewIcon({ 
  size = 24, 
  color = 'currentColor',
  isActive = false 
}: FullViewIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        opacity={isActive ? 0.15 : 1}
      />
      <rect
        x="6"
        y="7"
        width="5"
        height="4"
        rx="1"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="1.5"
        opacity={isActive ? 0.3 : 0.8}
      />
      <rect
        x="13"
        y="7"
        width="5"
        height="4"
        rx="1"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="1.5"
        opacity={isActive ? 0.3 : 0.8}
      />
      <rect
        x="6"
        y="13"
        width="5"
        height="4"
        rx="1"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="1.5"
        opacity={isActive ? 0.3 : 0.8}
      />
      <rect
        x="13"
        y="13"
        width="5"
        height="4"
        rx="1"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="1.5"
        opacity={isActive ? 0.3 : 0.8}
      />
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
