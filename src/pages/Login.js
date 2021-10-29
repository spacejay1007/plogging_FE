import React from 'react';
import { Redirect } from 'react-router';
import { LoginForm } from '../components';

const Login = () => {
  const cookie = document.cookie;

  if (cookie !== '') {
    return <Redirect to='/' />;
  }

  return (
    <React.Fragment>
      <LoginForm />
    </React.Fragment>
  );
};

export default Login;
