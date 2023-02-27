import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { GrPowerReset } from "react-icons/gr";
const AddProduct = () => {
  const [count, setcount] = useState(0);

  return (
    <div className="container text-center ">
      <h1 className="bg-primary">Counter</h1>
      <h1>{count}</h1>
      <div >
        {" "}
        <button className="bg-danger m-3 p-3" onClick={() => setcount(count + 1)}>
          <HiPlus />
        </button>
        <button className="bg-success m- p-3" onClick={() => setcount(0)}>
          <GrPowerReset />
        </button>
        <button
          className="bg-info m-3 p-3"
          onClick={() => count > 0 && setcount(count - 1)}
        >
          <HiMinus />
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
