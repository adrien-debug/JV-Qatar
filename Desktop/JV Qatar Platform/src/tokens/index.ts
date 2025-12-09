/**
 * Design Tokens HEARST AI - Système de design unifié
 * Consolidation de tous les tokens de design
 */

// Couleurs
export const colors = {
  primary: {
    hearstGreen: '#8afd81',
    hearstGreenDark: '#6fdc66',
    hearstGreenLight: '#a5ff9c',
    primaryGreen: '#8afd81',
    accentPrimary: '#8afd81',
    hearstPrimary: '#8afd81',
  },
  lightGreen: {
    1: '#E5FFEB',
    2: '#CFFFDA',
    3: '#B8FFCA',
    4: '#A3FFBA',
    5: '#8DFFA9',
    primaryLightGreen: '#A7FB90',
  },
  secondary: {
    accentSecondary: '#7bed9f',
    hearstMint500: '#7bed9f',
    accentSuccess: '#8afd81',
    success: '#27ae60',
    accentWarning: '#f6c344',
    warning: '#f39c12',
    accentDanger: '#ff6b6b',
    error: '#e74c3c',
    accentInfo: '#4ecdc4',
    info: '#3498db',
  },
  ashGrey: {
    1: '#D9E1DD',
    2: '#C4CFCB',
    3: '#ADBAB6',
    4: '#9EB3A8',
    5: '#75847C',
    accent: '#9EB3A8',
  },
  backgrounds: {
    primaryDark: '#000000',
    bgPrimary: '#0a0a0a',
    primaryGrey: '#1a1a1a',
    bgSecondary: '#1a1a1a',
    bgTertiary: '#242424',
    bgHover: '#2a2a2a',
    hearstDark900: '#0A0A0A',
    hearstDark800: '#141414',
    hearstDark700: '#1A1A1A',
  },
  grey: {
    100: '#2a2a2a',
    200: '#3a3a3a',
    300: '#4a4a4a',
    400: '#666666',
    500: '#999999',
    subtle: '#F8F8F8',
    subtleDarker: '#E5E5E5',
  },
  black: {
    pure: '#000000',
    900: '#1A1A1A',
    800: '#2D2D2D',
    700: '#404040',
    bgPrimary: '#0a0a0a',
    bgSecondary: '#1a1a1a',
  },
  warmGrey: {
    100: '#F5F3F0',
    200: '#E8E4DF',
    300: '#D4CEC7',
    400: '#B8AFA5',
    500: '#9C8F83',
  },
  terracotta: {
    100: '#F5E6E0',
    200: '#E8C9BD',
    300: '#D4A68F',
    400: '#B87D5F',
    500: '#9C5A3F',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b8b8b8',
    muted: '#6b6b6b',
    default: '#000000',
    negative: '#FFFFFF',
    unrestricted: '#A7FB90',
    accent: '#9EB3A8',
    accentLighter: '#C4CFCB',
    accentDarker: '#75847C',
    secondaryVariant1: '#9CA3AF',
    secondaryVariant2: '#D1D5DB',
    tertiary: '#9CA3AF',
    auxiliary: '#E5E7EB',
    error: '#FF4444',
    warning: '#FFB800',
    success: '#00C853',
  },
  system: {
    error: '#FF4444',
    warning: '#FFB800',
    success: '#00C853',
    info: '#3498DB',
  },
  graphics: {
    1: '#A7FB90',
    2: '#9EB3A8',
    3: '#FFB800',
    4: '#FF4444',
    5: '#00C853',
    6: '#8DFFA9',
    7: '#CFFFDA',
    8: '#75847C',
    9: '#B8FFCA',
    10: '#D9E1DD',
    11: '#9C5A3F',
    12: '#B87D5F',
    13: '#D4A68F',
    14: '#E8C9BD',
    15: '#F5E6E0',
  },
  neutral: {
    whitePure: '#FFFFFF',
    greySubtle: '#F8F8F8',
    greySubtleDarker: '#E5E5E5',
  },
} as const

// Espacements
export const spacing = {
  0: '0px',
  1: '2px',
  2: '4px',
  3: '8px',
  4: '12px',
  5: '16px',
  6: '24px',
  7: '32px',
  8: '48px',
  9: '64px',
  10: '80px',
} as const

// Typographie
export const typography = {
  fontFamily: {
    primary: "'FK Grotesk Trial', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    mono: "'Fira Code', 'Consolas', 'Monaco', monospace",
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    display: '52px',
    pageTitle: '32px',
    sectionTitle: '25px',
    subsectionTitle: '18px',
    body: '16px',
    bodyMinor: '14px',
    caption: '12px',
  },
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    display: '64px',
    pageTitle: '40px',
    sectionTitle: '32px',
    subsectionTitle: '24px',
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.5px',
    wider: '1px',
  },
} as const

// Bordures et rayons
export const radius = {
  flat: '0px',
  small: '8px',
  default: '16px',
  section: '20px',
  rounded: '1000px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const

// Bordures
export const borders = {
  thin: {
    width: '1px',
    style: 'solid',
    color: '#2a2a2a',
    radius: '8px',
  },
  medium: {
    width: '2px',
    style: 'solid',
    color: '#2a2a2a',
    radius: '16px',
  },
  thick: {
    width: '3px',
    style: 'solid',
    color: '#2a2a2a',
    radius: '20px',
  },
  hover: {
    color: '#3a3a3a',
  },
  active: {
    color: '#8afd81',
  },
} as const

// Ombres
export const shadows = {
  sm: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  glowGreen: '0 0 20px rgba(167, 251, 144, 0.3), 0 0 40px rgba(167, 251, 144, 0.1)',
  glowAccent: '0 0 20px rgba(158, 179, 168, 0.2), 0 0 40px rgba(158, 179, 168, 0.1)',
} as const

// Transitions
export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: '400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  durationFast: '150ms',
  durationNormal: '250ms',
  durationSlow: '350ms',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const

// Dégradés
export const gradients = {
  primary: 'linear-gradient(135deg, #A7FB90 0%, #8DFFA9 50%, #B8FFCA 100%)',
  accent: 'linear-gradient(135deg, #9EB3A8 0%, #ADBAB6 50%, #C4CFCB 100%)',
  subtle: 'linear-gradient(135deg, rgba(167, 251, 144, 0.1) 0%, rgba(207, 253, 218, 0.05) 100%)',
  overlay: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
} as const

// Flou
export const blur = {
  sm: 'blur(4px)',
  md: 'blur(8px)',
  lg: 'blur(16px)',
  xl: 'blur(24px)',
} as const

// Layout
export const layout = {
  sidebarWidth: '200px',
  headerHeight: '70px',
  dashboardWidth: '1440px',
  gridColumns: '12',
  gridGutter: '24px',
  gridGap: '24px',
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1440px',
  },
} as const

// Diviseurs
export const dividers = {
  horizontal: {
    height: '1px',
    color: '#2a2a2a',
    margin: '24px 0',
  },
  vertical: {
    width: '1px',
    color: '#2a2a2a',
    margin: '0 24px',
  },
  section: {
    height: '2px',
    color: '#3a3a3a',
    margin: '32px 0',
  },
} as const

// Connecteurs
export const connectors = {
  default: {
    stroke: '#9EB3A8',
    strokeWidth: '2px',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  active: {
    stroke: '#8afd81',
    strokeWidth: '3px',
  },
  hover: {
    stroke: '#a5ff9c',
    strokeWidth: '2.5px',
  },
} as const

// Stroke (pour icônes)
export const stroke = {
  icons: {
    default: '#ffffff',
    active: '#8afd81',
    secondary: '#b8b8b8',
    muted: '#6b6b6b',
  },
  width: {
    thin: '1px',
    default: '2px',
    thick: '3px',
  },
  linecap: 'round',
  linejoin: 'round',
} as const

// Outline
export const outline = {
  focus: {
    width: '2px',
    style: 'solid',
    color: '#8afd81',
    offset: '4px',
  },
  error: {
    width: '2px',
    style: 'solid',
    color: '#ff4444',
  },
} as const

// Overlays
export const overlays = {
  0: 'rgba(0, 0, 0, 0)',
  1: 'rgba(0, 0, 0, 0.1)',
  2: 'rgba(0, 0, 0, 0.2)',
  3: 'rgba(0, 0, 0, 0.3)',
  4: 'rgba(0, 0, 0, 0.4)',
  5: 'rgba(0, 0, 0, 0.5)',
} as const

// Structure
export const structure = {
  sidebar: {
    width: '200px',
    borderRight: '1px solid #2a2a2a',
  },
  header: {
    height: '70px',
    borderBottom: '1px solid #2a2a2a',
  },
  content: {
    maxWidth: '1600px',
    padding: '48px 80px',
  },
} as const

// Icônes
export const icons = {
  sizeStandard: '24px',
  style: 'outline-rounded',
  strokeWidth: '2px',
} as const

// Export de tous les tokens
export const tokens = {
  colors,
  spacing,
  typography,
  radius,
  borders,
  shadows,
  transitions,
  gradients,
  blur,
  layout,
  dividers,
  connectors,
  stroke,
  outline,
  overlays,
  structure,
  icons,
} as const

export default tokens

