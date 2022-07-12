import React, { Component } from "react";
import { ButtonContainer } from "../Button";
export default class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;
    //console.log(this.props.value);
    return (
      <>
        <div className="row">
          <img
            src={img}
            style={{ width: "8rem", heigth: "5rem" }}
            alt={title}
          />
        </div>
        <div className="row">
          <span> {title}</span>
        </div>
        <div className="row">
            <span>price: &nbsp;</span>
          <strong> ${price}</strong>
        </div>
        <div className="row">
          <div>
            <ButtonContainer
              onClick={() => {
                return decrement(id);
              }}
            >
              -
            </ButtonContainer>
            <ButtonContainer>{count}</ButtonContainer>
            <ButtonContainer
              onClick={() => {
                return increment(id);
              }}
            >
              +
            </ButtonContainer>
          </div>
        </div>
        <div className="row" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>

        <div className="row ">
          item total:&nbsp;<strong> ${total} </strong>
        </div>
      </>
    );
  }
}
