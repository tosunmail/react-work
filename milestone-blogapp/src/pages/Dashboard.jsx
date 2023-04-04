import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function CardComponent() {
  const [data, setData] = useState([]);
  const API_KEY = "http://32277.fullstack.clarusway.com/api/blogs/";

  const getData = async () => {
    try {
      const responce = await axios(API_KEY);
      console.log(responce.data);
      setData(responce.data);
    } catch (error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardComponent;
