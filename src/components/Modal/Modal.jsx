import React from "react";
import Button from "../Buttons/Button";
import styles from './modal.module.scss';



class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.onClickButton = this.onClickButton.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  state={
      openModal : false
  }

  onClickButton = e =>{
      e.preventDefault()
      this.setState({openModal : true})
  }

  onCloseModal = ()=>{
      this.setState({openModal : false})
  }

  render() {
      return (
        <div className={this.onClickButton}>
          <section className={styles.modal__main}>
            <h2 className={styles.modal__title}>Add book?</h2>
            <p className={styles.modal__context}>
              Are you sure you want to add this book?
            </p>
            <Button
              text='yes'
              color='blue'
              onClick={dispatchEvent(this.id)}
            />
            <Button
              text='no'
              color='red'
              onClick={this.onCloseModal}
            />
          </section>
        </div>
      )
  }  
}

export default Modal;
