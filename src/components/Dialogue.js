import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
export default class Dialogue extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { dialogueOpen, closeDialogue } = value;
          const { img, title, price } = value.dialogueProduct;
          if (!dialogueOpen) {
            return null;
          } else {
            return (
                  <div className="dialogue-container">
                    <div className="dialogue">
                      <h2 className="text-title title">item added to cart</h2>
                      <img src={img} className="" alt={title} />
                      <h5>{title}<br/><br/>price : ${price}</h5>
                      <div className="buttons">
                        <Link to={process.env.PUBLIC_URL + "/"}>
                          <ButtonContainer
                            onClick={() => {
                              closeDialogue();
                            }}
                          >
                            Continue Shopping
                          </ButtonContainer>
                        </Link>
                        <Link to={process.env.PUBLIC_URL + "/cart"}>
                          <ButtonContainer
                            onClick={() => {
                              closeDialogue();
                            }}
                          >
                            Go To Cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

