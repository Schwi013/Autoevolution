import carsImg from '../assets/cars.png'

const previewCards = [
  {
    title: 'Sin Costo por Apertura',
    desc: 'Inicia tu plan de autofinanciamiento sin cobros adicionales por apertura, destinando tu dinero directamente a tu objetivo.',
  },
  {
    title: 'Adjudicación Rápida',
    desc: 'Recibe el bien mueble contratado mediante la aplicación de los procedimientos',
  },
  {
    title: 'Requisitos Flexibles',
    desc: 'Acceso más flexible que la banca tradicional. En muchos casos no se requiere historial crediticio o comprobación estricta de ingresos.',
  },
]

export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero-bg-shape"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Autofinanciamiento<br />Inteligente</h1>
          <div className="hero-btns">
            <a href="#caracteristicas" className="btn btn-primary btn-lg">
              Conocer Más <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="social-links-hero">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="hero-image">
          <img src={carsImg} className="main-car" alt="Autos disponibles" />
        </div>
      </div>
      {/* Services Preview Cards */}
      <div id="caracteristicas" className="container services-preview">
        {previewCards.map((card) => (
          <div key={card.title} className="preview-card">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </header>
  )
}
