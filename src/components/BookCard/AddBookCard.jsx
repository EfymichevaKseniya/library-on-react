import React from 'react';
import Modal from '../Modal/Modal';
import Button from '../Buttons/Button';
import styles from './card.module.css';


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.text = props.text;
    this.state = {isShow: true};
    this.handleClick = this.handleClick.bind(this);
  }

  showModal() {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }));
  }

  render() {
    return (
      <>
        <li className={styles.card__item} key={this.id}>
          <span className={styles.text}>{this.text}</span>
          <Button
            text='add'
            color='green'
            onClick={this.handleClick}
          />
        </li>
        <Modal onShow={this.isShow} id={this.id} />
      </>
    )
  }
}

export default Page;
