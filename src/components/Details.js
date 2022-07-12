import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container description">
              {/* title */}
              <Title name={title}/>
              {/* end of title */}
              <div>
                  <img src={img} className="" alt={title} />
                {/* prdoduct info */}
                <div className="details">
                  <h1>model : {title}</h1>
                  <h4 className="text-title company">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-orange price">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize">
                    some info about product :
                  </p>
                  <p className="">{info}</p>
                  {/* buttons */}
                  <div >
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openDialogue(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
