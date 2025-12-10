'use client'

import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useEffect, useState } from 'react'

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // Sur mobile, le sidebar est toujours collapsed
      if (window.innerWidth < 768) {
        setIsCollapsed(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Topbar />
      <Sidebar 
        isCollapsed={isCollapsed} 
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)} 
      />
      <main style={{
        marginLeft: isCollapsed ? 'var(--layout-sidebar-width-collapsed)' : 'var(--layout-sidebar-width)',
        width: isCollapsed ? 'calc(100% - var(--layout-sidebar-width-collapsed))' : 'calc(100% - var(--layout-sidebar-width))',
        marginTop: 'var(--structure-header-height)',
        minHeight: 'calc(100vh - var(--structure-header-height))',
        backgroundColor: 'var(--color-bg-content)',
        transition: 'margin-left var(--transition-base), width var(--transition-base)'
      }}>
        {children}
      </main>
    </>
  )
}
