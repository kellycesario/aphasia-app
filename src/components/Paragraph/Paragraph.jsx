export default function Paragraph({ text, className }) {
  return (
    <p className={`paragraph paragraph--${className ? className : ""}`}>
      {text}
    </p>
  );
}
