const clients = [
  'Kinfolk Digital', 'Aura Labs', 'Mono Brand',
  'Editorial Collective', 'NovaTech', 'Vanta Systems', 'Orbital SaaS'
];

export default function Marquee() {
  const doubled = [...clients, ...clients];
  return (
    <div className="marquee-strip">
      <span className="marquee-label">OUR TRUSTED CLIENTS</span>
      <div className="marquee-overflow">
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <span key={i} className="marquee-item">
              {name} <span className="marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
