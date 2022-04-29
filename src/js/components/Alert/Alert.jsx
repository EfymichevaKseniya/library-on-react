import React from 'react';
import AlertIcon from '../../../img/alert.svg';
import './alert.scss';

export default class Alert extends React.Component {
  render() {
    const { text, className } = this.props;
    return (
      <div className={className}>
        <img src={AlertIcon} alt='alert sign' />
        <span>{text}</span>
      </div>
    );
  }
}
