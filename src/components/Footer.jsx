import logoSvg from '../assets/logo.svg'
import profecoImg from '../assets/Logo_PROFECO.png'
import secrImg from '../assets/secr.png'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <img src={logoSvg} alt="Autoevolution Motor Center" style={{ height: '160px', width: '160px', maxWidth: 'none' }} />
          </div>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#caracteristicas">Acerca de</a></li>
              <li><a href="#process">El Proceso</a></li>
              <li><a href="#beneficios">Beneficios</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Preautorizaciones</h4>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Correo Electrónico" required />
              <button type="submit"><i className="fas fa-arrow-right"></i></button>
            </form>
            <div className="social-links-footer">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner" style={{ justifyContent: 'center', gap: '40px' }}>
          <a href="https://www.gob.mx/profeco" target="_blank" rel="noopener noreferrer">
            <img style={{ height: '48px', width: 'auto', objectFit: 'contain' }} src={profecoImg} alt="PROFECO" />
          </a>
          <a href="https://www.gob.mx/se/" target="_blank" rel="noopener noreferrer">
            <img style={{ height: '48px', width: 'auto', objectFit: 'contain' }} src={secrImg} alt="Secretaría de Economía" />
          </a>
        </div>
      </div>
    </footer>
  )
}
