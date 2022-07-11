import React, { useCallback, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../context/context";

const useGetViewProduct = (id) => {
  const [product, setProduct] = useState([]);
  const { state } = useContext(MyContext);

  const fetchProduct = useCallback(async () => {
    const url = `https://stormy-garden-64397.herokuapp.com/products/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login.token}`,
      },
    });
    const data = await response.json();
    setProduct(data);
  }, [state.login.token]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return product;
};

export default useGetViewProduct;
