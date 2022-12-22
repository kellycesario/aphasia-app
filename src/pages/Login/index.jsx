import { useState } from 'react';
import CardsWrapper from '@organisms/CardsWrapper';
import LoginForm from '@molecules/LoginForm';

export default function LoginPage() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {isAuth && <CardsWrapper />}
      {!isAuth && <LoginForm />}
    </>
  );
}
