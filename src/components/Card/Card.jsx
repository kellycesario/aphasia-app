import "./card.scss";

export default function Card({ icon, title }) {
  return (
    <div className="card">
      {icon && <span>{icon}</span>}
      <p>{title}</p>
    </div>
  );
}
