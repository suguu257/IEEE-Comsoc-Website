import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">IEEE ComSoc</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/events">
            Events
          </NavLink>
        </li>

        <li>
          <NavLink to="/alumni">
            Alumni
          </NavLink>
        </li>

        <li>
          <NavLink to="/team">
            Team
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar