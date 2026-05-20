import { useState, useEffect } from 'react'
import logoSvg from '../assets/logo.svg'

const NAV_LINKS = [
  { href: '#home', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#autofinanciamiento', label: 'Autofinanciamiento' },
  { href: '#caracteristicas', label: 'Características' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#process', label: '¿Cómo funciona?' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-88px 0px -55% 0px', threshold: 0 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.slice(1)
    const el = document.getElementById(targetId)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsNavOpen(false)
  }

  return (
    <nav className={`navbar${isNavOpen ? ' nav-open' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo" style={{ width: '50px', height: '50px' }}>
          <img
            src={logoSvg}
            alt="Autoevolution Motor Center"
            style={{
              position: 'absolute',
              top: '50%',
              left: '150%',
              transform: 'translate(calc(-50% - 30px), -50%)',
              height: '160px',
              width: '160px',
              maxWidth: 'none',
            }}
          />
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Preautorización
        </a>
        <div
          className="mobile-menu-btn"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <i className={`fas ${isNavOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  )
}
