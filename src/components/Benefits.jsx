const benefits = [
  {
    title: 'Sin Intereses',
    icon: 'fa-ban',
    value: '0%',
    desc: 'Modelo basado en aportaciones, no en una tasa bancaria tradicional.',
    iconColor: 'var(--primary)',
  },
  {
    title: 'Reglas Claras',
    icon: 'fa-file-signature',
    value: '100%',
    desc: 'Montos, plazos y mecanismos definidos desde el contrato.',
    iconColor: 'var(--dark)',
    active: true,
  },
  {
    title: 'Flexibilidad',
    icon: 'fa-forward',
    value: 'Fast',
    desc: 'Posibilidad de anticipar mensualidades para mejorar tu oportunidad de adjudicación.',
    iconColor: 'var(--primary)',
  },
  {
    title: 'Acceso Más Simple',
    icon: 'fa-user-check',
    value: 'Easy',
    desc: 'Flexibilidad para personas sin comprobantes de ingresos.',
    iconColor: 'var(--primary)',
  },
  {
    title: 'Ahorro Programado',
    icon: 'fa-piggy-bank',
    value: 'Plan',
    desc: 'Aportaciones periódicas con objetivo claro y control de presupuesto.',
    iconColor: 'var(--dark)',
  },
  {
    title: 'Entrega Anticipada',
    icon: 'fa-flag-checkered',
    value: 'Soon',
    desc: 'Puedes recibir el vehículo antes de concluir el total del plan.',
    iconColor: 'var(--primary)',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="pricing-section">
      <div className="section-title-bg">Ventajas</div>
      <div className="container pricing-container">
        <div className="pricing-intro">
          <h2>Beneficios Clave</h2>
          <p>Ventajas claras para planificar tu compra sin el modelo tradicional de intereses bancarios.</p>
        </div>
        <div className="pricing-cards">
          {benefits.map((b) => (
            <div key={b.title} className={b.active ? 'price-card active' : 'price-card'}>
              <h3>{b.title}</h3>
              <div className="price" style={{ fontSize: '2.5rem' }}>
                <i className={`fas ${b.icon}`} style={{ color: b.iconColor, marginRight: '15px' }}></i> {b.value}
              </div>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
