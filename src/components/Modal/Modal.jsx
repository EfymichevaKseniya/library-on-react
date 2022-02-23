import React from "react";
import Button from "../Buttons/Button";
import styles from './modal.module.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.visible=props.visible;
    this.title = props.title;
    this.content = props.content;
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

  onCloseModal = () =>{
      this.setState({openModal : false})
      console.log(1);
  }

  render() {
      if (!this.visible) return null

      return (
        <div className={styles.modal} onClick={this.onCloseModal}>
          <div className={styles.modal__dialog} onClick={e => e.stopPropagation()}>
              <div className={styles.modal__header}>
                  <h3 className={styles.modal__title}>{this.title} book</h3>
                  <span className={styles.modal__close} onClick={this.onCloseModal}>
            </span>
              </div>
              <div className={styles.modal__body}>
                  <div className={styles.modal__content}>Are you sure you want to {this.content} this book?</div>
              </div>
              <div className={styles.modal__footer}>
                <Button
                  text='yes'
                  color='blue'
                  size='normal'
                  type='button'
                />
                <Button
                  text='no'
                  color='red'
                  size='normal'
                  type='button'
                  onClick={this.onCloseModal}
                />
              </div>
          </div>
        </div>
      )
  }  
}

export default Modal;
