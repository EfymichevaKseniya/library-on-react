import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './form.module.scss';
import Button from '../Buttons/Button';
import Alert from '../Alert/Alert';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Введите email'),
  name: Yup.string().required('Поле не может быть пустым'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Поле не может быть пустым'),
  password_confirmation: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const url = 'https://internsapi.public.osora.ru/api/auth/signup';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, error: null };
  }

  handleSubmit = async (values) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    try {
      const user = await response.json();
      this.setState({ user });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { user, error } = this.state;
    return (
      <Formik
        initialValues={{
          email: 'test@mail.ru',
          password: '123456',
          password_confirmation: '123456',
          name: 'Igor',
        }}
        validationSchema={SignUpSchema}
        validateOnBlur
        onSubmit={this.handleSubmit}
      >
        {({ isValid }) => {
          return (
            <Form className={styles.form}>
              {error && <Alert className='error' text={error.message} />}
              {user && <Navigate to='/login' replace />}
              {!isValid ? (
                <Alert className='error' text='Alert message' />
              ) : null}
              <h1 className={styles.title}>Registration</h1>
              <div className={styles.input__fields}>
                <Field className={styles.input} type='name' name='name' />
                <Field className={styles.input} type='email' name='email' />
                <Field
                  className={styles.input}
                  type='password'
                  name='password'
                />
                <Field
                  className={styles.input}
                  type='password'
                  name='password_confirmation'
                />
              </div>
              <Button text='Submit' size='big' color='blue' type='submit' />
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default SignUpForm;
