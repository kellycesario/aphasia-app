import { Label } from '@radix-ui/react-label';
//import './styles.scss';

export default function Input({ id, label, type, placeholder }) {
  return (
    <div className="input">
      <Label htmlFor={id} className="input__label">
        {label}
      </Label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="input__field"
      />
    </div>
  );
}
