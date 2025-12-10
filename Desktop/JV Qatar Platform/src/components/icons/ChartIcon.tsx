'use client'

interface ChartIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function ChartIcon({ 
  size = 24, 
  color = 'currentColor',
  isActive = false 
}: ChartIconProps) {
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
        y="3"
        width="18"
        height="18"
        rx="2"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        opacity={isActive ? 0.15 : 1}
      />
      <path
        d="M7 16 L7 12 M11 16 L11 8 M15 16 L15 10 M19 16 L19 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
