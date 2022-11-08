import "./styles.scss";
export default function Paragraph({ text, size }) {
  return (
    <p className={"paragraph" + " " + `paragraph--${size ? size : ""}`}>
      {text}
    </p>
  );
}
