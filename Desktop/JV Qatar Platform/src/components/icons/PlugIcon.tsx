'use client'

interface PlugIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function PlugIcon({ 
  size = 24, 
  color = 'currentColor',
  isActive = false 
}: PlugIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="4"
        width="8"
        height="12"
        rx="1"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        opacity={isActive ? 0.15 : 1}
      />
      <rect
        x="10"
        y="2"
        width="4"
        height="3"
        rx="0.5"
        fill={color}
        opacity="0.8"
      />
      <rect
        x="10"
        y="15"
        width="4"
        height="3"
        rx="0.5"
        fill={color}
        opacity="0.8"
      />
      <circle cx="12" cy="10" r="1.5" fill={color} />
      {isActive && (
        <circle
          cx="12"
          cy="12"
          r="10"
          fill={color}
          opacity="0.1"
        />
      )}
    </svg>
  )
}
