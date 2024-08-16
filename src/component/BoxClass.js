import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
  }
  getResult = () => {
    if (
      this.props.title === "Computer" &&
      this.props.result !== "Tie" &&
      this.props.result !== ""
    ) {
      this.result = this.props.result === "Win" ? "Lose" : "Win";
    } else {
      this.result = this.props.result;
    }
  };
  render() {
    this.getResult();
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <h2>
          {this.props.item && this.props.item.name}
        </h2>
        <img
          className="item-image"
          src={this.props.item && this.props.item.img || 'https://www.shutterstock.com/shutterstock/photos/2151726093/display_1500/stock-vector-colorful-hand-icon-set-rock-paper-scissors-easy-to-use-vector-material-2151726093.jpg'}
        />
        <h2>{this.result}</h2>
      </div>
    );
  }
}