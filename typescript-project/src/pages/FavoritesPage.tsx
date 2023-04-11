import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import { VoidFunc } from "../models/models";
import { removeFavorites } from "../features/productsSlice";
import { toastSuccessNotify } from "../helper/ToastNotify";

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const handleRemove: VoidFunc = (product) => {
    const newData = favorites.filter((item) => item.id !== product.id);
    dispatch(removeFavorites(newData));
    toastSuccessNotify("Product removed")
  };
  const { favorites } = useAppSelector((state) => state.products);
  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-5 p-5">
        {favorites.map((item) => (
          <Card
            key={item.id}
            text="Remove"
            item={item}
            handleFunc={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
