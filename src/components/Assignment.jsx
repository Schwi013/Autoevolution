const processData = [
  { code: 'F0322', name: 'LESLI JASSIR AMADOR R' },
  { code: 'F0319', name: 'URI DE JESÚS GOMEZ S' },
  { code: 'F0314', name: ' VIRIDIANA VELEZ RIVERA'},
  { code: 'F0313', name: 'ALEJANDRA LEAL G' },
  { code: 'F0310', name: 'LEONARDO ALFREDO MAR Y' }
]

const awardedData = [
  { code: 'F0303', name: 'EULALIO CHAGA C' },
  { code: 'F0312', name: 'NEHEMIAS GOMEZ G' },
  { code: 'F0301', name: 'DIEGO AGUILAR J' },
  { code: 'F0325', name: 'MIZZIO EDOARDO BLANCO P' }
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
            <div className="board-header">ADJUDICADOS DE JUNIO</div>
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
