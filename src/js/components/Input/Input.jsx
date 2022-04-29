import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './input.module.scss';
import BooksContext from '../../../utils/BooksContext';

const url = 'https://www.googleapis.com/books/v1/volumes?q=';

class InputSearch extends React.Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = BooksContext;

  handleSubmit = async (values) => {
    const response = await fetch(`${url}${values.search}`);
    const result = await response.json();
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
