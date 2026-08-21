const processData = [
  { code: 'F0306', name: 'FELIPE P HERNANDEZ' },
  { code: 'F0310', name: 'LEONARDO A. MAR YAÑEZ' },
  { code: 'F0313', name: 'ALEJANDRA LEAL G.' },
  { code: 'F0327', name: 'EMANUEL OMAR AGUILAR V.' },
  { code: 'F0329', name: 'PEDRO MARTIN C.' },
  { code: 'F0332', name: 'MIGUEL REYES A.' },
  { code: 'F0333', name: 'ALEJANDRO ALBERTO S.' },
  { code: 'F0335', name: 'JULIANA HERNANDEZ U.' },
  { code: 'F0338', name: 'GUILLERMO LOPEZ R.' },
  { code: 'F0339', name: 'JOSE FELIX S.' },
  { code: 'F0340', name: 'DAVID NIEVES G.' },
  { code: 'F0341', name: 'SANDRA GUADALUPE C.' },
  { code: 'F0343', name: 'NOHEMI HERNANDEZ G' },
  { code: 'F0344', name: 'GUSTAVO ROSAS C' },
  { code: 'F0345', name: 'CARMEN DE JESUS M.' },
  { code: 'F0346', name: 'JOSE MANUEL N.' }                          
]

const awardedData = [
  { code: 'F0303', name: 'EULALIO CHAGA C' },
  { code: 'F0312', name: 'NEHEMIAS GOMEZ G' },
  { code: 'F0301', name: 'DIEGO AGUILAR J' },
  { code: 'F0328', name: 'JUSTO Z. BAEZ' },
  { code: 'F0330', name: 'HECTOR MUÑOZ O.' },
  { code: 'F0342', name: 'JOSE RODOLFO R.' }
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
            <div className="board-header">ADJUDICADOS DE AGOSTO</div>
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
