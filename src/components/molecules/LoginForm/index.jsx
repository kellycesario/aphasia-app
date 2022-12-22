import './styles.scss';
import Input from '@atoms/Input';

export default function LoginForm() {
  return (
    <form action="" className="login__form">
      <Input
        id="e-mail"
        label="E-mail"
        type="e-mail"
        placeholder="johndoe@email.com"
      />

      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="*******"
      />

      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="login__button"
        role="button"
      >
        Sign In
      </button>
    </form>
  );
}
