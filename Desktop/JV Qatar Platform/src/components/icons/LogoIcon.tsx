'use client'

interface LogoIconProps {
  size?: number
  color?: string
  isActive?: boolean
}

export default function LogoIcon({ 
  size = 24, 
  color = '#2ECC71',
  isActive = false 
}: LogoIconProps) {
  // Le logo est un H/N stylisé avec deux barres verticales et deux diagonales qui se croisent
  // Vue simplifiée : deux barres verticales + deux diagonales qui forment un X au centre
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Barre verticale gauche - épaisse */}
      <rect
        x="4"
        y="4"
        width="6"
        height="32"
        fill={color}
        opacity={isActive ? 1 : 0.9}
      />
      
      {/* Barre verticale droite - épaisse */}
      <rect
        x="30"
        y="4"
        width="6"
        height="32"
        fill={color}
        opacity={isActive ? 1 : 0.9}
      />
      
      {/* Diagonale du haut gauche (barre épaisse inclinée) */}
      <rect
        x="7"
        y="6"
        width="18"
        height="6"
        fill={color}
        opacity={isActive ? 1 : 0.9}
        transform="rotate(-45 16 9)"
        transformOrigin="16 9"
      />
      
      {/* Diagonale du haut droit (barre épaisse inclinée) */}
      <rect
        x="15"
        y="6"
        width="18"
        height="6"
        fill={color}
        opacity={isActive ? 1 : 0.9}
        transform="rotate(45 24 9)"
        transformOrigin="24 9"
      />
    </svg>
  )
}
