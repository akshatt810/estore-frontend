import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
export default class Store extends Component {
  render() {
    return (
      <section class="cart">
        <ProductConsumer>
          {value => {
            //console.log(value);
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name="your" title="cart" />
                  <div className="gallery cart-gallery">
                    <CartColumns />
                    <CartList value={value} />
                  </div>
                    <CartTotals value={value} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
