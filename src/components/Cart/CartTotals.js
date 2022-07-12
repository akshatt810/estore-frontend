import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";
export default class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart
    } = this.props.value;
    const emptyCart = (cart.length === 0);
    return (
      <>
        {!emptyCart && (
          <div className="container">
              <div className="cart-total">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <ButtonContainer
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </ButtonContainer>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong>$ {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span>{" "}
                  <strong>$ {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong>$ {cartTotal} </strong>
                </h5>
                
              <ButtonContainer
                onClick={() => {
                }}>
                pay now
              </ButtonContainer>
              </div>
          </div>
        )}
      </>
    );
  }
}
