export default function Notices() {
  return (
    <section id="avisos" style={{ padding: '50px 0', backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="section-title text-center" style={{ marginBottom: '30px' }}>
          <h2>Avisos</h2>
          {/* <p className="subtitle" style={{ fontSize: '1.125rem' }}>Sin avisos por el momento.</p> */}
        </div>
        <div className="notice-block">
          <img src="../src/assets/asesor.jpeg" alt="Aviso" className="notice-image" />
          <p className="notice-text">El siguiente asesor ya no forma parte de nuestro equipo de trabajo. Cualquier información y/o solicitud de pago proveniente de la persona, la empresa no se hará responsable de los trámites que se lleve acabo. Clientes atendidos por el asesor favor de comunicarse con el número de atención a clientes para darle seguimiento a su trámite.</p>
        </div>
      </div>
    </section>
  )
}
