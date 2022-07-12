import React from "react";
import Emptycart from "./empty-cart.svg"
import Title from "../Title";

export default function EmptyCart() {
  return (
    <div className="container empty-cart">
      <img src={Emptycart} alt="empty cart icon " />
      <Title name="your cart is currently" title="empty" />
    </div>
  );
}
