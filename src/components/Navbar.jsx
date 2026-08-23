import './Navbar.css'

export default function Navbar({ eyebrow = 'Workspace', title = 'Dashboard' }) {
  return (
    <header className="navbar">
      <div className="navbar__titles">
        <span className="navbar__eyebrow">{eyebrow}</span>
        <h1 className="navbar__title">{title}</h1>
      </div>

      <div className="navbar__actions">
        <label className="navbar__search">
          <IconSearch />
          <input type="text" placeholder="Search..." />
        </label>

        <button className="navbar__icon-btn" aria-label="Notifications">
          <IconBell />
        </button>

        <div className="navbar__avatar" title="Account">
          NA
        </div>
      </div>
    </header>
  )
}

function IconSearch() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 10L13 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function IconBell() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2C6 2 4.5 3.5 4.5 5.5V8L3 10.5H13L11.5 8V5.5C11.5 3.5 10 2 8 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M6.5 12.5C6.5 13.3 7.2 14 8 14C8.8 14 9.5 13.3 9.5 12.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
