import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <span>© {year} Shell. All rights reserved.</span>
      <nav className="footer__links">
        <a href="#">Docs</a>
        <a href="#">Support</a>
        <a href="#">Status</a>
      </nav>
    </footer>
  )
}
