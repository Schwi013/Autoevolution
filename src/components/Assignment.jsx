const processData = [
  { code: 'F0358', name: 'VITOR H. SANCHEZ' },
  { code: 'F0359', name: 'OSWALDO VAZQUEZ G.' },
  { code: 'F0360', name: 'JORGE ALBERTO T.' },
  { code: 'F0361', name: 'GULIANA GONZALEZ T.' },
  { code: 'F0362', name: 'LEOPOLDO SANCHEZ M.' },
  { code: 'F0363', name: 'CARLOS AGUSTIN X.' },
  { code: 'F0365', name: 'REFUGIO MIXCOHUA S. ' },
  { code: 'F0366', name: 'LUIS ANGEL T.' },

]

const awardedData = [
  { code: 'F0266', name: 'ANDREA MOJICA C.' },
  { code: 'F0267', name: 'DIEGO CERVANTES C.' },
  { code: 'F0268', name: 'LEOPOLDO CANO M.' },
  { code: 'F0269', name: 'MARIA LUCERO C..' },
  { code: 'F0270', name: 'JESUS GARCIA A.' },
  { code: 'F0271', name: 'ISRAEL MORALES Z.' },
  { code: 'F0272', name: 'ROBERTO ALVAREZ F.' },
  { code: 'F0339', name: 'JOSE FELIX S.' }
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
