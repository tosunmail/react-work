import { useState } from "react";
import Button from "./Button";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleclick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="header">
        <h1>Task Tracker</h1>
        <div className="showtask">
          {show ? (
            <button className="btn" onClick={handleclick}>Close Add Task Bar</button>
          ) : (
            <div>
              <button className="btn" onClick={handleclick}>Hide Add Task Bar</button>
              <Button />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
