import React from "react";
import "./Checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket </h2>

          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
