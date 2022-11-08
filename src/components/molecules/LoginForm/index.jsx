import "./styles.scss";
import { Label } from "@radix-ui/react-label";
import Input from "../../atoms/Input";

export default function LoginForm() {
  return (
    <section>
      <form action="" className="loginForm__form">
        <Input
          id="e-mail"
          label="E-mail"
          type="e-mail"
          placeholder="johndoe@email.com"
          classLabelName="loginForm__label"
          classInputName="loginForm__input"
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder=""
          classLabelName="loginForm__label"
          classInputName="loginForm__input"
        />

        <a className="loginForm__forgotPassword" href="#">
          Forgot password
        </a>

        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="loginForm__button"
          role="button"
        >
          Sign In
        </button>
      </form>
    </section>
  );
}
