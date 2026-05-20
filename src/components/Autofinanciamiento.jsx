export default function Autofinanciamiento() {
  return (
    <section id="autofinanciamiento" className="info-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Autofinanciamiento</h2>
          <p className="subtitle">Un esquema organizado para adquirir tu vehículo mediante aportaciones programadas, con reglas definidas desde el contrato.</p>
        </div>
        <div className="info-grid">
          <div className="info-card">
            <h3><i className="fas fa-circle-info"></i> ¿Qué es?</h3>
            <p>Un grupo realiza aportaciones periódicas administradas profesionalmente para adjudicar el vehículo bajo reglas claras de contrato.</p>
            <ul className="info-list compact">
              <li><span className="info-label">Sin banca:</span> no depende de un crédito tradicional.</li>
              <li><span className="info-label">Planificado:</span> pagos programados y condiciones definidas.</li>
            </ul>
          </div>
          <div className="info-card">
            <h3><i className="fas fa-award"></i> Adjudicación</h3>
            <p>Recibe el bien mueble contratado mediante la aplicación de los procedimientos.</p>
            <div className="tag-row">
              <span className="tag">Subasta</span>
              <span className="tag">Pagos diferidos</span>
              <span className="tag">Sistema de puntos</span>
            </div>
            <details className="info-details">
              <summary>Ver cómo funciona</summary>
              <ul className="info-list compact">
                <li><span className="info-label">Subasta:</span> adelantas mensualidades para obtener el bien.</li>
                <li><span className="info-label">Pagos diferidos:</span> al alcanzar cierto porcentaje de aportaciones.</li>
                <li><span className="info-label">Sistema de puntos:</span> historial con la empresa; normalmente 1 punto por mes pagado.</li>
              </ul>
            </details>
          </div>
        </div>
        <div className="info-banner">
          <div className="info-banner-title">Trámite fácil y sencillo</div>
          <div className="info-banner-text">Preautorizaciones al momento.</div>
          <a href="#contact" className="btn btn-primary">Solicitar Preautorización <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  )
}
