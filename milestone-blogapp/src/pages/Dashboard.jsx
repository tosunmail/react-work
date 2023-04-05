import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Grid } from "@mui/material";

function CardComponent() {
  const [data, setData] = useState([]);
  const API_KEY = "http://32277.fullstack.clarusway.com/api/blogs/";

  const getData = async () => {
    try {
      const {data} = await axios(API_KEY);
      setData(data);
    } catch (error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Grid
        sx={{
          gap: 10,
          justifyContent: "center",
          alignItems: "center",

        }}
        container
      >
        {data.map((item) => (
          <Card  key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
}

export default CardComponent;
