import "./App.css";
import Cart from "./Cart";
import React, { useState } from "react";
import Total from "./Total";

function App() {
  let [total,setTotal] = useState(0)
  let object = [
    {
      name: "pizza",
      price: 200,
    },
    {
      name: "cooldrink",
      price: 50,
    },
    {
      name: "sandwich",
      price: 100,
    },
    {
      name: "burger",
      price: 50,
    },
  ];
  return (
    <div className="abcd">
      {object.map((v, i) => {
        return <>
          <Cart name={v.name} price={v.price} setTotal={setTotal} total={total}  />
        </>
      })}
      <Total total={total} />
    </div>
  );
}

export default App;
