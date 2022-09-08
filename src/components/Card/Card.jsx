import "./card.scss";
import Paragraph from "../Paragraph/Paragraph";

export default function Card({ icon, title, size }) {
  return (
    <button className="card">
      {icon && <span>{icon}</span>}
      <Paragraph text={title} size={size} />
    </button>
  );
}
