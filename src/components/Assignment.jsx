const processData = [
  { code: 'F0306', name: 'FELIPE HERNÁNDEZ' },
  { code: 'F0303', name: 'NEHEMIAS GOMEZ G' },
  { code: 'F0301', name: 'DIEGO AGUILAR J' },
  { code: 'F0298', name: 'ESTEBAN URIEL GORDILLO C' },
  { code: 'F0295', name: 'ANGEL MIGUEL CASTILLA SANCHEZ' },
  { code: 'F0287', name: 'MARIANA DE JESÚS PÉREZ N' },
]

const awardedData = [
  { code: 'F0300', name: 'EULALIO CHAGA C' },
  { code: 'F0299', name: 'JAVIER CRUZ C' },
  { code: 'F0297', name: 'FRANCISCO ADAHYR ROMERO S' },
  { code: 'F0296', name: 'JOSÉ LUIS VÁSQUEZ G' },
  { code: 'F0290', name: 'JAIR ARMANDO BRAVO O' },
  { code: 'F0289', name: 'RAMÓN DÍAZ R' },
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
            <div className="board-header">ADJUDICADOS DE MAYO</div>
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
