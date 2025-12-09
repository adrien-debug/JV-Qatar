'use client'

interface GridIconProps {
  size?: number
  color?: string
}

export default function GridIcon({ size = 48, color = 'currentColor' }: GridIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Power Lines */}
      <line x1="4" y1="24" x2="44" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="4" y1="12" x2="44" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="4" y1="36" x2="44" y2="36" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      
      {/* Power Towers */}
      <path
        d="M12 8 L12 40 M16 8 L16 40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 8 L36 40 M32 8 L32 40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Energy Flow Indicators */}
      <circle cx="24" cy="24" r="4" fill={color} opacity="0.3" />
      <circle cx="24" cy="24" r="2" fill={color} />
    </svg>
  )
}

