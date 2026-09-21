const processData = [
  { code: 'F0306', name: 'FELIPE P HERNANDEZ' },
  { code: 'F0310', name: 'LEONARDO A. MAR YAÑEZ' },
  { code: 'F0313', name: 'ALEJANDRA LEAL G.' },
  { code: 'F0327', name: 'EMANUEL OMAR AGUILAR V.' },
  { code: 'F0333', name: 'ALEJANDRO ALBERTO S.' },
  { code: 'F0339', name: 'JOSE FELIX S.' },
  { code: 'F0340', name: 'DAVID NIEVES G.' }             
]

const awardedData = [
  { code: 'F0277', name: 'ABERTO LÓPEZ T.'},
  { code: 'F0282', name: 'MARIA DEL CARMEN I.' },
  { code: 'F0286', name: 'ALEXIS TORRES P.'},
  { code: 'F0288', name: 'JESUS ALBERTO R.' },
  { code: 'F0290', name: 'LUIS ALVAREZ G.' },
  { code: 'F0295', name: 'TERESA JUSTO A.' },
  
  { code: 'F0344', name: 'GUSTAVO ROSAS C' } 
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
