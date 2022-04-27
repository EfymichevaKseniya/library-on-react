import React from 'react';
import styles from './input.module.scss';
import { Formik, Form, Field } from 'formik';
import BooksContext from '../../utils/BooksContext';

const url = 'https://www.googleapis.com/books/v1/volumes?q=';

class InputSearch extends React.Component {
  static contextType = BooksContext;

  handleSubmit = async (values) => {
    let response = await fetch(`${url}${values.search}`);
    let result = await response.json();
    values.setBooks(result.items);
  };

  render() {
    const { setBooks } = this.context;

    return (
      <Formik
        initialValues={{ search: '', setBooks }}
        onSubmit={this.handleSubmit}
      >
        {() => {
          return (
            <Form className={styles.form}>
              <div className={styles.input__wrapper}>
                <Field className={styles.input} type='search' name='search' />
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default InputSearch;
