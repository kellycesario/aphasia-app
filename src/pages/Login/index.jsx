import { useState } from "react";
import CardsWrapper from "../../components/organisms/CardsWrapper"
import LoginForm from '../../components/molecules/LoginForm'

export default function LoginPage() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <>
      {isAuth && <CardsWrapper />}
      {!isAuth && <LoginForm />}
    </>
  );
}
