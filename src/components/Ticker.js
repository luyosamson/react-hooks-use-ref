import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");

  //Create ref and set its initial price

  const prevPriceRef=useRef(price);

  useEffect(()=>{
    //Use the current value of ref
    const prevPrice=prevPriceRef.current;
    if(price>prevPrice){
      setColor("Green")

    }else if(price<prevPrice){
      setColor("Red")

    }else{
      setColor("Black")
    }
     // set the new value of the ref (note: this doesn't trigger a re-render)

     prevPriceRef.current=price

  },[price])
  console.log(price)

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, [price]);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
