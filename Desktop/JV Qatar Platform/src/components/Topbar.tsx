'use client'

export default function Topbar() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--structure-header-height)',
      backgroundColor: 'var(--color-bg-header)',
      borderBottom: 'var(--structure-header-border-bottom)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--spacing-5)',
      zIndex: 999,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Logo and Title Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-4)'
      }}>
        <span style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-primary-hearst-green)',
          letterSpacing: 'var(--letter-spacing-tight)'
        }}>
          NEARST
        </span>
        <span style={{
          fontSize: 'var(--font-size-body)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-text-primary-on-dark)',
          letterSpacing: 'var(--letter-spacing-normal)'
        }}>
          ASSET MANAGEMENT
        </span>
      </div>

      {/* User Avatar */}
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary-hearst-green)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontSize: 'var(--font-size-body)',
        fontWeight: 'var(--font-weight-semibold)',
        cursor: 'pointer',
        transition: 'var(--transition-base)',
        boxShadow: '0 2px 8px rgba(46, 204, 113, 0.3)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(46, 204, 113, 0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(46, 204, 113, 0.3)'
      }}
      >
        JD
      </div>
    </header>
  )
}
