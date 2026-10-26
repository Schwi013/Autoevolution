const processData = [
  { code: 'F0306', name: 'FELIPE P. HERNANDEZ' },
  { code: 'F0310', name: 'LEONARDO A. MAR YAÑEZ' },
  { code: 'F0327', name: 'EMANUEL OMAR AGUILAR V.' },
  { code: 'F0333', name: 'ALEJANDRO ALBERTO S.' },
  { code: 'F0339', name: 'JOSE FELIX S.' },
  { code: 'F0340', name: 'DAVID NIEVES G.' },
  { code: 'F0350', name: 'JOAQUIN P. DE LA ROSA' },
  { code: 'F0352', name: 'IRAN ZUÑIGA O.' },
  { code: 'F0356', name: 'SCARLET HERNANDEZ R.' },
  { code: 'F0357', name: 'ROMAN MARTINEZ R.' },
  { code: 'F0358', name: 'VICTOR HUGO S..' },

]

const awardedData = [
  { code: 'F0266', name: 'ANDREA MOJICA C.' },
  { code: 'F0267', name: 'DIEGO CERVANTES C.' },
  { code: 'F0268', name: 'LEOPOLDO CANO M.' },
  { code: 'F0269', name: 'MARIA LUCERO C..' },
  { code: 'F0270', name: 'JESUS GARCIA A.' },
  { code: 'F0271', name: 'ISRAEL MORALES Z.' },
  { code: 'F0272', name: 'ROBERTO ALVAREZ F.' }
]

export default function Assignment() {
  return (
    <section className="review-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Asignación</h2>
          <p className="subtitle">Consulta el estatus y los adjudicados del mes</p>
        </div>
        <div className="boards">
          <div className="board">
            <div className="board-header">EN PROCESO DE ASIGNACIÓN</div>
            <div className="board-body">
              {processData.map((row) => (
                <div key={row.code} className="board-row">
                  <div className="board-code">{row.code}</div>
                  <div className="board-name">{row.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="board">
            <div className="board-header">ADJUDICADOS DE SEPTIEMBRE</div>
            <div className="board-body">
              {awardedData.map((row) => (
                <div key={row.code} className="board-row">
                  <div className="board-code">{row.code}</div>
                  <div className="board-name">{row.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
