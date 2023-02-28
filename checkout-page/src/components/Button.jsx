import React, { useState } from "react";

const Button = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      {show ? (
        <button className="bg-warning p-3 rounded" onClick={handleClick}>Show Product Bar</button>
      ) : (
        <button className="bg-success text-white p-3 rounded" onClick={handleClick}>Hide Product Bar</button>
      )}
    </div>
  );
};

export default Button;
