import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">BytBrand</Link>
        <ul className="navbar-links">
          <li><NavLink to="/services"     className={({ isActive }) => isActive ? 'nav-active' : ''}>Services</NavLink></li>
          <li><NavLink to="/case-studies" className={({ isActive }) => isActive ? 'nav-active' : ''}>Case Studies</NavLink></li>
          <li><NavLink to="/process" className={({ isActive }) => isActive ? 'nav-active' : ''}>Process</NavLink></li>
        </ul>
        <Link to="/contact" className="btn-primary navbar-cta">Start a Project</Link>
        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
        <NavLink to="/services"     onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/case-studies" onClick={() => setOpen(false)}>Case Studies</NavLink>
        <NavLink to="/process"      onClick={() => setOpen(false)}>Process</NavLink>
        <Link    to="/contact"      onClick={() => setOpen(false)}>Start a Project</Link>
      </div>
    </>
  );
}
