import React, { useState, useEffect } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addFavorites,
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import { EventFunc, Product, Products } from "../models/models";
import Card from "../components/Card";
import { toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList, favorites } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (product: Product) => {
    if (favorites.filter((item) => item.id === product.id).length === 0) {
      dispatch(addFavorites(product));
      toastSuccessNotify("Product added to favorites")
    } else {
      toastWarnNotify("Already added to favorites")
    }
  };
  return (
    <div>
      <SearchComp handleChange={handleChange} />
      {loading ? (
        error ? (
          <div>
            <p className="text-center">Something Went Wrong...</p>
          </div>
        ) : (
          <div className="mt-52">
            <p className="text-center text-red-600">Products Loading...</p>
          </div>
        )
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-5 p-5">
          {productsList.map((item) => (
            <Card
              key={item.id}
              text="Add to favorites"
              item={item}
              handleFunc={handleAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
