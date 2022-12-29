import { Label } from '@radix-ui/react-label';

export default function TextArea({ id, label }) {
  return (
    <div className="textArea">
      <Label htmlFor={id} className="textArea__label">
        {label}
      </Label>
      <textarea id={id} className="textArea__field" />
    </div>
  );
}
