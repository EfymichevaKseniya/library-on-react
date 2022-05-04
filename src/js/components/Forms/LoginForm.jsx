import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// eslint-disable-next-line import/no-cycle
import { history } from '../../../App';
import Alert from '../Alert/Alert';
import styles from './form.module.scss';
import Button from '../Buttons/Button';
import { BASEURL } from '../../redux/actions';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Введите email'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Поле не может быть пустым'),
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: '' };
  }

  componentDidUpdate(prevState) {
    if (prevState.location.pathname !== window.location.pathname) {
      this.setState({ error: null });
    }
  }

  handleSubmit = async (values) => {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    try {
      const token = await response.json();
      const data = await token.data;
      localStorage.setItem('token', data.access_token);
      history.push('/');
      window.location.reload();
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <Formik
        initialValues={{ email: 'test@mail.ru', password: '123456' }}
        validationSchema={SignUpSchema}
        onSubmit={this.handleSubmit}
      >
        {({ isValid }) => {
          return (
            <Form className={styles.form}>
              {!isValid || error ? (
                <Alert className='error' text={error.message} />
              ) : null}
              <h1 className={styles.title}>Login</h1>
              <div className={styles.input__fields}>
                <Field className={styles.input} type='email' name='email' />
                <Field
                  className={styles.input}
                  type='password'
                  name='password'
                />
              </div>
              <Button text='Log in' size='big' color='blue' type='submit' />
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default LoginForm;
