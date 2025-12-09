'use client'

interface SubstationIconProps {
  size?: number
  color?: string
}

export default function SubstationIcon({ size = 48, color = 'currentColor' }: SubstationIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Building */}
      <rect
        x="8"
        y="16"
        width="32"
        height="24"
        rx="2"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      
      {/* Windows */}
      <rect x="14" y="20" width="6" height="6" fill={color} opacity="0.3" />
      <rect x="28" y="20" width="6" height="6" fill={color} opacity="0.3" />
      <rect x="14" y="30" width="6" height="6" fill={color} opacity="0.3" />
      <rect x="28" y="30" width="6" height="6" fill={color} opacity="0.3" />
      
      {/* Transformer Symbol on Roof */}
      <rect x="20" y="12" width="8" height="6" rx="1" fill={color} opacity="0.5" />
      <line x1="22" y1="14" x2="26" y2="14" stroke={color} strokeWidth="1" />
      <line x1="22" y1="16" x2="26" y2="16" stroke={color} strokeWidth="1" />
      
      {/* Power Lines In */}
      <line x1="0" y1="24" x2="8" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      
      {/* Power Lines Out */}
      <line x1="40" y1="24" x2="48" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

