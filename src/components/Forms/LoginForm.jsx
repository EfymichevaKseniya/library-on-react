import React  from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Alert from '../Alert/Alert';
import * as Yup from 'yup';
import styles from './form.module.scss';
import Button from '../Buttons/Button';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Введите email"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Поле не может быть пустым"),
});

const url = 'https://internsapi.public.osora.ru/api/auth/login';

class LoginForm extends React.Component {
  state = { token: null, error: null };

  handleSubmit = async (values) => {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
      })

      try {
        let token = await response.json();
        console.log(token);
        let data = await token.data;
        this.setState({ token });
        localStorage.setItem('token', data.access_token);
      } catch (error) {
        this.setState({ error });
      }
  };

  render() {
    let { token, error } = this.state;
    return (
      <>
        <Formik
          initialValues={{ email: 'test@mail.ru', password: '123456'}}
          validationSchema={SignUpSchema}
          onSubmit={this.handleSubmit}
        >
          {({isValid}) => {
            return (
              <Form className={styles.form}>
                {token && (
                  <Navigate to='/' replace={true} />
                )}
                { !isValid || error ? <Alert className='error' text={error.message} />: null }
                <h1 className={styles.title}>Login</h1>
                <div className={styles.input__fields}>
                  <Field className={styles.input} type="email" name="email" />
                  <Field className={styles.input} type="password" name="password" />
                </div>
                <Button
                  text='Log in'
                  size='big'
                  color='blue'
                  type='submit'
                />
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }
}

export default LoginForm;