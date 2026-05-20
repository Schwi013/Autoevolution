import carsImg from '../assets/cars.png'
import car1Img from '../assets/car1.png'
import imageWebp from '../assets/image.webp'
import chevroletImg from '../assets/2025-chevrolet-trax-ng-rs.avif'

const steps = [
  { number: 1, title: 'Realiza tu cotización', bg: carsImg },
  { number: 2, title: 'Solicita tu aprobación de crédito', bg: car1Img },
  { number: 3, title: 'Recibe tu código, programa cita para realizar tu trámite', bg: imageWebp },
  { number: 4, title: 'Realiza y concluye tu trámite', bg: chevroletImg },
]

export default function HowItWorks() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>¿Cómo Funciona?</h2>
          <p className="subtitle">Conoce el proceso desde que te integras hasta que recibes tu auto</p>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <div className="step-bg" style={{ backgroundImage: `url('${step.bg}')` }}></div>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h4>{step.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
