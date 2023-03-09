import React, { useState } from "react";
import Header from "../../components/header/Header";
import { HomeContainer, HomeImg, MainContainer } from "./Home.style";
import homeImg from "../../assets/books.jpg";
import axios from "axios";
import Card from "../../components/card/Card";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setmyData] = useState([]);
  const APP_KEY = process.env.REACT_APP_apiKey;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;
  

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HomeContainer>
      <Header
        setQuery={setQuery}
        setSelectType={setSelectType}
        getData={getData}
      />
        {!myData.length ? (
        <HomeImg>
          <img src={homeImg} alt="home image" />
        </HomeImg>
      ) : (
        <MainContainer wrap="wrap">
          {
            myData.map((item)=> <Card key={item.id} item={item}/>)
          }
        </MainContainer>
      )}
    </HomeContainer>
  );
};

export default Home;