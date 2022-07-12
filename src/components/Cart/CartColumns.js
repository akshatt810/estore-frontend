import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <>
        <div className="column-head text-title">
          <p>products</p>
        </div>
        <div className="column-head text-title">
          <p>name of product</p>
        </div>
        <div className="column-head text-title">
          <p>price</p>
        </div>
        <div className="column-head text-title">
          <p>quantity</p>
        </div>
        <div className="column-head text-title">
          <p>remove</p>
        </div>
        <div className="column-head text-title">
          <p>total</p>
        </div>
      </>
    );
  }
}
