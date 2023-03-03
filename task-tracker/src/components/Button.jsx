import React, { useState } from "react";
import AddTask from "./AddTask";

const Button = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter Your Task"
        className="inpt"
      />
      <button className="btnSave" type="submit">Save</button>

      <ul>
       
      </ul>
    </div>
  );
};

export default Button;
