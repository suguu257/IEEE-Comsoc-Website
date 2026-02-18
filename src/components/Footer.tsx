import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer glass">
      <div className="footer-content">
        <h3>IEEE ComSoc</h3>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Events</a>
          <a href="#">Team</a>
        </div>

        <p className="footer-copy">
          © 2026 IEEE Communications Society. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
