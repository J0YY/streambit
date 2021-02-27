import './Card.scss';

function Card({ icon, title, desc, imgsComponent, style }) {
  return (
    <div className="trade-section-card" style={style}>
      <div className="trade-section-heading">
        {icon}
        <h2>{title}</h2>
      </div>
      <p className="trade-section-desc">{desc}</p>
      {imgsComponent}
    </div>
  );
}

export default Card;
