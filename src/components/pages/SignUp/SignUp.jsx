/* eslint-disable class-methods-use-this */
import React from 'react';
import Page from '../../Page/Page';
import SignUpForm from '../../Forms/SignUpForm';

class SignUp extends React.Component {
  render() {
    return (
      <Page>
        <SignUpForm />
      </Page>
    );
  }
}

export default SignUp;
