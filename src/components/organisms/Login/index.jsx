import React from 'react';
import './styles.scss';

import LoginForm from '@molecules/LoginForm';

const Login = () => {
  return (
    <section className="login">
      <header className="login__header">
        <h1 className="login__title">Login</h1>
      </header>
      <main className="login__main">
        <LoginForm />
      </main>
      <footer className="login__footer">
        <a className="login__link" href="#">
          Sign Up
        </a>
      </footer>
    </section>
  );
};

export default Login;
