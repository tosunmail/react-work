import React from "react";

import { fetchStart } from "../features/authSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail } from "../features/authSlice";
import { getSuccess } from "../features/stockSlice";
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

  return { getStockData, deleteStockData };
};

export default useStockCall;
