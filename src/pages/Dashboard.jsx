import './pages.css'

export default function Dashboard() {
  return (
    <div>
      <div className="page-grid">
        <div className="stat-card">
          <div className="stat-card__label">Active Projects</div>
          <div className="stat-card__value">12</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__label">Tasks Done</div>
          <div className="stat-card__value">248</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__label">Team Members</div>
          <div className="stat-card__value">9</div>
        </div>
      </div>

      <div className="page-card">
        <h2>Overview</h2>
        <p>
          This is the main content area, rendered inside MainLayout via the
          router's Outlet. Swap this out for real dashboard content — charts,
          tables, activity feeds — whatever the app needs.
        </p>
      </div>
    </div>
  )
}
