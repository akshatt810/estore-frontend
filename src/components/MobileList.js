import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default class MobileList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <>
        <ProductWrapper className="">
          <div className="container">
            <Title name="smart" title="phones" />
            <div className="gallery main-gallery">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    if(product.category === "smartphone")
                    return <Product key={product.id} product={product}  className="tile"/>;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </>
    );
  }
}

const ProductWrapper = styled.section``;
