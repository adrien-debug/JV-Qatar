'use client'

interface ClipboardIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function ClipboardIcon({ 
  size = 24, 
  color = 'currentColor',
  isActive = false 
}: ClipboardIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isActive ? color : 'none'}
        opacity={isActive ? 0.15 : 1}
      />
      <rect
        x="9"
        y="3"
        width="6"
        height="4"
        rx="1"
        stroke={color}
        strokeWidth="2"
        fill={color}
        opacity="0.2"
      />
      <line x1="9" y1="12" x2="15" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="16" x2="15" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
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
