'use client'

import { siteConfig, siteCurrent33kV, blockCurrent33kV } from '@/lib/siteConfig'
import GridOverview from '@/components/GridOverview'
import BlocksSummary from '@/components/BlocksSummary'
import GlobalInfoPanel from '@/components/GlobalInfoPanel'
import VisualStats from '@/components/VisualStats'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)',
      padding: 'var(--spacing-8)'
    }}>
      {/* Header */}
      <header style={{
        marginBottom: 'var(--spacing-10)',
        paddingBottom: 'var(--spacing-8)',
        borderBottom: '2px solid var(--color-ash-grey-accent)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '4px',
          background: 'var(--gradient-primary)',
          borderRadius: 'var(--radius-full)'
        }} />
        <h1 style={{
          fontSize: 'var(--font-size-display)',
          lineHeight: 'var(--line-height-display)',
          color: 'var(--color-primary-hearst-green)',
          fontWeight: 'var(--font-weight-bold)',
          marginBottom: 'var(--spacing-3)',
          textShadow: '0 0 20px rgba(138, 253, 129, 0.3)',
          letterSpacing: 'var(--letter-spacing-tight)'
        }}>
          {siteConfig.name}
        </h1>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-3)'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-hearst-green)',
            boxShadow: '0 0 8px var(--color-primary-hearst-green)'
          }} />
          <p style={{
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)',
            fontWeight: 'var(--font-weight-medium)'
          }}>
            {siteConfig.location}
          </p>
        </div>
      </header>

      {/* Section A - High-Level Diagram */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Architecture Électrique Globale
        </h2>
        <GridOverview site={siteConfig} />
      </section>

      {/* Section B - Visual Stats */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Statistiques Visuelles
        </h2>
        <VisualStats site={siteConfig} />
      </section>

      {/* Section C - Blocks Summary Grid */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Blocs de Puissance
        </h2>
        <BlocksSummary blocks={siteConfig.blocks} />
      </section>

      {/* Section C - Global Info Panel */}
      <section style={{ marginBottom: 'var(--spacing-10)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Informations Globales
        </h2>
        <GlobalInfoPanel site={siteConfig} />
      </section>

      {/* Section D - Liens Rapides */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-section-title)',
          lineHeight: 'var(--line-height-section-title)',
          marginBottom: 'var(--spacing-6)',
          color: 'var(--color-text-primary)'
        }}>
          Accès Rapide
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--spacing-5)'
        }}>
          <Link href="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              padding: 'var(--spacing-5)',
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-default)',
              border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
              cursor: 'pointer',
              transition: 'var(--transition-base)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary-hearst-green)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-glow-green)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-thin-color)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <div style={{ fontSize: 'var(--font-size-section-title)' }}>📊</div>
              <div style={{ fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)' }}>Dashboard</div>
            </div>
          </Link>
          <Link href="/architecture-2d" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              padding: 'var(--spacing-5)',
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-default)',
              border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
              cursor: 'pointer',
              transition: 'var(--transition-base)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary-hearst-green)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-glow-green)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-thin-color)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <div style={{ fontSize: 'var(--font-size-section-title)' }}>📐</div>
              <div style={{ fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)' }}>Architecture 2D</div>
            </div>
          </Link>
          <Link href="/conteneurs" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              padding: 'var(--spacing-5)',
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-default)',
              border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
              cursor: 'pointer',
              transition: 'var(--transition-base)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary-hearst-green)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-glow-green)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-thin-color)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <div style={{ fontSize: 'var(--font-size-section-title)' }}>📦</div>
              <div style={{ fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)' }}>Conteneurs</div>
            </div>
          </Link>
          <Link href="/reseau" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              padding: 'var(--spacing-5)',
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-default)',
              border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
              cursor: 'pointer',
              transition: 'var(--transition-base)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary-hearst-green)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-glow-green)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-thin-color)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <div style={{ fontSize: 'var(--font-size-section-title)' }}>🔗</div>
              <div style={{ fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)' }}>Réseau</div>
            </div>
          </Link>
          <Link href="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              padding: 'var(--spacing-5)',
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-default)',
              border: 'var(--border-thin-width) var(--border-thin-style) var(--border-thin-color)',
              cursor: 'pointer',
              transition: 'var(--transition-base)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary-hearst-green)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-glow-green)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-thin-color)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <div style={{ fontSize: 'var(--font-size-section-title)' }}>📋</div>
              <div style={{ fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)' }}>Menu</div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

