import React, { useState } from "react";

const Button = () => {
  const [text, setText] = useState("");
  const [updated, setUpdated] = useState(text);
  const list = [
    {
      id: new Date(),
      isComplete: true,
    },
  ];

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setUpdated(text);
    console.log(text);
  };
  const handleDelete = (items) => {
    setUpdated(existingItems => {
      return existingItems.filter((item) => item !== items);
    });
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter Your Task"
        className="inpt"
      />
      <button onClick={handleClick} className="btnSave" type="submit">
        Save
      </button>

      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <span>{updated}</span>
              {/* <button onClick={() => handleDelete(items)}>Delete</button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Button;
