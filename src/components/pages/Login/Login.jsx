/* eslint-disable class-methods-use-this */
import React from 'react';
import Page from '../../Page/Page';
import LoginForm from '../../Forms/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <Page>
        <LoginForm />
      </Page>
    );
  }
}

export default Login;
