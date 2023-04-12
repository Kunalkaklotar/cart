import { useState } from "react";

const Cart = (props) => {
  let [price, setPrice] = useState(0);
  const setTotalDec = () => {
    setPrice(price === 0 ? 0 : --price);
  };
  const setTotalInc = () => {
    setPrice(++price);
    props.setTotal(props.total + props.price);
  };
  return (
    <>
      <div className="cart">
        <div className="main-box">
          <div className="box">
            <h2>{props.name}</h2>
            <span> ₹ {props.price} </span>
            <div className="center">
              <button onClick={setTotalDec}>-</button>
              <span>{price}</span>
              <button onClick={setTotalInc}>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
