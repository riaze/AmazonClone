import React from "react";
import "./Product.css";
import GradeIcon from "@material-ui/icons/Grade";
import { useStateValue } from './StateProvider';
function Product({ id, title, img, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
//  console.log(basket)
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>€</small>
          <small>{price}</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <GradeIcon />
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick= {addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
