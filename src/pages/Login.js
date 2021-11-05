import React from 'react';
import { Redirect } from 'react-router';
import { Header, LoginForm } from '../components';

const Login = () => {
  const cookie = document.cookie;
  console.log(cookie);
  if (cookie !== '') {
    return <Redirect to='/' />;
  }

  return (
    <React.Fragment>
      <Header />
      <LoginForm />
    </React.Fragment>
  );
};

export default Login;
