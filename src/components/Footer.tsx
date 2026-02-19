import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer glass">
      <div className="footer-content">
        <h3>IEEE ComSoc</h3>

        <div className="footer-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/events">Events</a>
          <a href="/team">Team</a>
        </div>

        <p className="footer-copy">
          © 2026 IEEE Communications Society. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
