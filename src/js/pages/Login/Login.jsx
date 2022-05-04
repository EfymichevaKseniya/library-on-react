/* eslint-disable class-methods-use-this */
import React from 'react';
import Page from '../../components/Page/Page';
// eslint-disable-next-line import/no-cycle
import LoginForm from '../../components/Forms/LoginForm';

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
