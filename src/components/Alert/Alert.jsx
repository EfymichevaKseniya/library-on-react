import React from 'react';
import AlertIcon from '../../img/alert.svg';
import './alert.scss';

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.text = this.props.text;
    this.className = this.props.className;
  }

  render() {
    const { text, className } = this.state;
    return (
      <div className={className}>
        <img src={AlertIcon} alt='alert sign' />
        <span>{text}</span>
      </div>
    );
  }
}
