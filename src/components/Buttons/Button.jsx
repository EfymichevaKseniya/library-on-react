import React from 'react';
import './button.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.size = props.size;
    this.color = props.color;
    this.type = props.type;
    this.text = props.text;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <button
        className={`btn btn--${this.size} btn--${this.color}`}
        type={this.type}
        {...this.props}
      >
        {this.text}
      </button>
    );
  }
}
