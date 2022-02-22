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
    return (
      <div className={this.className}>
        <img src={AlertIcon} alt='alert sign' />
        <span>{this.text}</span>
      </div>
      
    );
  }
}
