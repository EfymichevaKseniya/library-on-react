import React  from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './form.module.scss';
import Button from '../Buttons/Button';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Введите email"),
  name: Yup.string().required("Поле не может быть пустым"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Поле не может быть пустым"),
  password_confirmation: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const url = 'https://internsapi.public.osora.ru/api/auth/signup';

class SignUpForm extends React.Component {
  handleSubmit = async (values) => {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
      })

      if (response.ok) {
        let json = await response.json();
        <Navigate to='/login' />
      }
  };

  render() {
    return (
      <>
        <Formik
          initialValues={{ email: 'test@mail.ru', password: '123456', password_confirmation: '123456', name: 'Petr'}}
          validationSchema={SignUpSchema}
          onSubmit={this.handleSubmit}
        >
          {() => {
            return (
              <Form className={styles.form}>
                <ErrorMessage name='name' className={styles.error} component='div'/>
                <h1 className={styles.title}>Registration</h1>
                <div className={styles.input__fields}>
                  <Field className={styles.input} type="name" name="name" />
                  <Field className={styles.input} type="email" name="email" />
                  <Field className={styles.input} type="password" name="password" />
                  <Field className={styles.input} type="password" name="password_confirmation" />
                </div>
                <Button
                  text='Submit'
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

export default SignUpForm;