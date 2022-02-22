import React from 'react';
import './button.scss';

export default class Button extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    state = {
      text: this.props.text,
      size: this.props.size,
      color: this.props.color,
      type: this.props.type,
    }
    
    handleClick() {
    }

  render() {
    return (
      <button className={`btn btn--${this.state.size} btn--${this.state.color}`} type={this.state.type} onClick={this.handleClick}>
        {this.state.text}
      </button>
    );
  }
}