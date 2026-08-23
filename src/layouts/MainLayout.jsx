import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Footer from '../components/Footer.jsx'
import './MainLayout.css'

const PAGE_META = {
  '/': { eyebrow: 'Workspace', title: 'Dashboard' },
  '/projects': { eyebrow: 'Workspace', title: 'Projects' },
  '/tabs': { eyebrow: 'Workspace', title: 'Tabs' },
  '/fixed-tabs': { eyebrow: 'Workspace', title: 'Fixed Tabs' },
  '/settings': { eyebrow: 'Workspace', title: 'Settings' },
}

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const { pathname } = useLocation()
  const meta = PAGE_META[pathname] ?? { eyebrow: 'Workspace', title: 'CORE CREDIT APP' }

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <div className="layout__body">
        <Navbar eyebrow={meta.eyebrow} title={meta.title} />
        <main className="layout__content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
