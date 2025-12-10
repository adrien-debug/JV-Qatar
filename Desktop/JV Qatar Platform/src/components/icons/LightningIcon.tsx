'use client'

interface LightningIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function LightningIcon({ 
  size = 24, 
  color = 'currentColor',
  isActive = false 
}: LightningIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
        fill={isActive ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={isActive ? 0.3 : 1}
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
