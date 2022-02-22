import React from 'react';
import styles from './input.module.scss';
import { Formik, Form, Field } from 'formik';

const url = 'https://www.googleapis.com/books/v1/volumes?q=';


class InputSearch extends React.Component {
  handleSubmit = async (values) => {
    let response = await fetch(`${url}${values.search}`);
    let result = response.json();
    console.log(result);
  };

  render() {
    return (
      <Formik
          initialValues={{ search: '' }}
          onSubmit={this.handleSubmit}
        >
          {() => {
            return (
              <Form className={styles.form}>
                <div className={styles.input__fields}>
                  <Field className={styles.input} type="search" name="search" />
                </div>
              </Form>
            );
          }}
      </Formik>
    )
  }
}

export default InputSearch;
