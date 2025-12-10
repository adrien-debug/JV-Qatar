'use client'

interface BuildingIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function BuildingIcon({ 
  size = 24, 
  color = 'currentColor',
  isActive = false 
}: BuildingIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 21h18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21V7l8-4v18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isActive ? color : 'none'}
        opacity={isActive ? 0.15 : 1}
      />
      <path
        d="M19 21V11l-6-4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="9" y1="9" x2="9" y2="9" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="12" x2="9" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="15" x2="9" y2="15" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="18" x2="9" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
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
