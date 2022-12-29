import { Paragraph } from '../../atoms';

export default function Card({ icon, title }) {
  return (
    <button className="card">
      {icon && <span className="card__icon">{icon}</span>}
      <Paragraph text={title} />
    </button>
  );
}
