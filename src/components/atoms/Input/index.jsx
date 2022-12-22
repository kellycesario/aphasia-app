import { Label } from '@radix-ui/react-label';
import './styles.scss';

export default function Input({ id, label, type, placeholder }) {
  return (
    <div className="login__input">
      <Label htmlFor={id} className="login__label">
        {label}
      </Label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="login__field"
      />
    </div>
  );
}
