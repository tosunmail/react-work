import React from "react";

import { fetchStart } from "../features/authSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail } from "../features/authSlice";
import { getSuccess , getProCatBrandSuccess } from "../features/stockSlice";
import useAxios from "../features/useAxios";

  import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    // const BASE_URL = "https://12277.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      getStockData(url);
      toastSuccessNotify(`${url} Successfully Deleted`)
      console.log(getStockData);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be deleted`)
    }
  };
  const postStockData = async (url , info) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.post(`stock/${url}/` , info );
      getStockData(url);
      toastSuccessNotify(`${url} Successfully Posted`)
      console.log(getStockData);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be Posted`)
    }
  };
  const putStockData = async (url , info) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/` , info  );
      getStockData(url);
      toastSuccessNotify(`${url} Successfully Edited`)
      console.log(getStockData);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be Edited`)
    }
  };
  
  const getProCatBrand = async () => {
    dispatch(fetchStart())
    try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken.get("stock/products/"),
        axiosWithToken.get("stock/categories/"),
        axiosWithToken.get("stock/brands/"),
      ])

      dispatch(
        getProCatBrandSuccess([products?.data, categories?.data, brands?.data])
      )
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`Data can not be fetched`)
    }
  }

  

  return { getStockData, deleteStockData , postStockData , putStockData ,getProCatBrand};
};

export default useStockCall;
