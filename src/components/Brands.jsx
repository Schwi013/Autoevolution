const brands = ['ram-alt', 'peugeot', 'nissan', 'mitsubishi', 'mazda', 'kia', 'lexus', 'hyundai', 'hummer', 'honda', 'ford', 'fiat']

const displayNames = {
  'ram-alt': 'Ram',
  'peugeot': 'Peugeot',
  'nissan': 'Nissan',
  'mitsubishi': 'Mitsubishi',
  'mazda': 'Mazda',
  'kia': 'Kia',
  'lexus': 'Lexus',
  'hyundai': 'Hyundai',
  'hummer': 'Hummer',
  'honda': 'Honda',
  'ford': 'Ford',
  'fiat': 'Fiat',
}

export default function Brands() {
  const items = brands.map((b) => ({
    name: displayNames[b] || b,
    src: new URL(`../assets/${b}-svgrepo-com.svg`, import.meta.url).href,
  }))

  const doubled = [...items, ...items]

  return (
    <section id="marcas" className="brands-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Marcas De Carros</h2>
          <p className="subtitle">Marcas comerciales más comunes</p>
        </div>
        <div className="sr-only">
          {items.map((item) => item.name).join(', ')}
        </div>
        <div className="brand-marquee" role="region" aria-label="Marcas de carros">
          <div className="brand-track">
            {doubled.map((item, i) => (
              <div className="brand-item" title={item.name} key={i}>
                <img className="brand-img" src={item.src} alt={item.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
