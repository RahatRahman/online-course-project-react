import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((total, course) => total + course.price, 0);
  return (
    <div className="cart">
      <div className="cart-top">
        <h2>Order Summary</h2>
        <h4>Course Taken: {cart.length}</h4>
        <h4>Total Amount: ${totalPrice.toFixed(2)}</h4>
      </div>
      <div className="cart-bottom">
        <p></p>
      </div>
    </div>
  );
};

export default Cart;
