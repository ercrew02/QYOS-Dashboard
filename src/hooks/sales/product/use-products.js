import React, { useCallback, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../context/context";

// function getDataProducts() {
//   const [products, setProducts] = useState([]);
//   const { state } = useContext(MyContext);

//   const getProducts = async () => {
//     const response = await fetch(
//       `https://stormy-garden-64397.herokuapp.com/products`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await response.json();
//     dispatch({
//       type: "GET_PRODUCTS",
//       payload: data,
//     });
//   };
const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const { state } = useContext(MyContext);

  const fetchProducts = useCallback(async () => {
    const url = "https://stormy-garden-64397.herokuapp.com/products/";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login.token}`,
      },
    });
    const data = await response.json();
    setProducts(data);
  }, [state.login.token]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return products;
};

export default useGetProducts;
