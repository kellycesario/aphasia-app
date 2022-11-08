import { useState } from "react";
import CardsWrapper from "../CardsWrapper"
import LoginForm from '../LoginForm'

export default function LoginPage() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <>
      {isAuth && <CardsWrapper />}
      {!isAuth && <LoginForm />}
    </>
  );
}
