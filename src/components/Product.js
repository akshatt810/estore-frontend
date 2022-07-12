import React, { Component } from "react";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import {randomColor} from "randomcolor";
import { ProductConsumer } from "../context";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    let bgColor = randomColor({
      luminosity: 'dark',/* 
      alpha: 0.7 */
    });
    return (
      <>
        <ProductConsumer>
          {value => {
            return (
            <Link to={process.env.PUBLIC_URL + "/details"} className = "tile product-tile" style={{backgroundColor: `${bgColor}`}}>
              <div className="tile-bg" style={{backgroundImage:`url("${img}")`}} onClick={() => value.handleDetail(id)}>
                <div className="tile-content">
                  <ButtonContainer className="" disabled={inCart}
                    onClick={() => {
                      value.addToCart(id);
                      value.openDialogue(id);
                    }} >
                    {inCart ? (
                      <p className="" disabled>
                        in cart
                      </p>
                    ) : (
                      <span>
                      <i className="" />
                      &nbsp; add to cart
                      </span>
                    )}
                  </ButtonContainer>
                  <p className="label">{title}</p>
                  <p className="label">
                    <span className="">$</span>
                    {price}
                  </p>
                </div>
              </div>
            </Link>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}
