import React, { useCallback, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../context/context";

const useAddProduct = () => {
  const [addproduct, setProduct] = useState([]);
  const { state } = useContext(MyContext);

  const fetchAddProduct = useCallback(async () => {
    const url = "https://stormy-garden-64397.herokuapp.com/products/";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login.token}`,
      },
      body: JSON.stringify({
        principal: "Garuda",
        name: "RinsoIII",
        variant: "Matic Original",
        category: "Deterjen",
        price: "666.0",
        detail: "A product. Testing",
      }),
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    this.setState({ postID: data.id });
  }, [state.login.token]);

  useEffect(() => {
    fetchAddProduct();
  }, [fetchAddProduct]);

  return useAddProduct;
};
export default useAddProduct;
