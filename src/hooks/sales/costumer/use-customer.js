import React, { useCallback, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../context/context";

const useGetCustomer = () => {
  const [customer, setCustomer] = useState([]);
  const { state } = useContext(MyContext);

  const fetchCustomer = useCallback(async () => {
    const url = "https://stormy-garden-64397.herokuapp.com/customers/";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login.token}`,
      },
    });
    const data = await response.json();
    setCustomer(data);
  }, [state.login.token]);

  useEffect(() => {
    fetchCustomer();
  }, [fetchCustomer]);

  return customer;
};

export default useGetCustomer;
