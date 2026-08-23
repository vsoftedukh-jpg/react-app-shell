import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const NAV_ITEMS = [
  {
    section: 'Workspace',
    items: [
      { to: '/', label: 'Dashboard', icon: IconGrid },
      { to: '/projects', label: 'Projects', icon: IconLayers },
      { to: '/tabs', label: 'Tabs', icon: IconLayers },
      { to: '/fixed-tabs', label: 'Fixed-Tabs', icon: IconLayers },
      { to: '/settings', label: 'Settings', icon: IconSliders },
    ],
  },
]

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      
      <div className="sidebar__brand" >
        <div className="sidebar__mark">V</div>
        {!collapsed && <span className="sidebar__brand-name">SOFT</span>}
        <button
          className="sidebar__toggle"
          onClick={onToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <IconChevron collapsed={collapsed} />
        </button>
      </div>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((group) => (
          <div key={group.section}>
            {!collapsed && (
              <div className="sidebar__section-label">{group.section}</div>
            )}
            {group.items.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `sidebar__link ${isActive ? 'active' : ''}`
                }
                title={collapsed ? label : undefined}
              >
                <Icon />
                {!collapsed && (
                  <span className="sidebar__link-label">{label}</span>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar__footer">
        <span className="sidebar__status-dot" />
        {!collapsed && <span>v1.0.1 · operational</span>}
      </div>
    </aside>
  )
}

function IconChevron({ collapsed }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: collapsed ? 'rotate(180deg)' : 'none' }}
    >
      <path
        d="M10 3L5 8l5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconGrid() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="10" y="2" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2" y="10" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="10" y="10" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function IconLayers() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2L16 6L9 10L2 6L9 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M2 10L9 14L16 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.5L9 16.5L16 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconSliders() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 5h8M13 5h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3 9h2M7 9h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3 13h8M13 13h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="11" cy="5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="5" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="11" cy="13" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
