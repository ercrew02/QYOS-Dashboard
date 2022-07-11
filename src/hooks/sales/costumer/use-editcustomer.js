import React, { useCallback, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../context/context";

const useGetEditCustomer = (id) => {
  const [editcustomer, setEditCustomer] = useState([]);
  const { state } = useContext(MyContext);

  const fetchEditCustomer = useCallback(async () => {
    const url = `https://stormy-garden-64397.herokuapp.com/customers/`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login.token}`,
      },
      body: JSON.stringify({
        id,
      }),
      
    });
    const data = await response.json();
    setEditCustomer(data);
  }, [state.login.token]);

  useEffect(() => {
    fetchEditCustomer();
  }, [fetchEditCustomer]);

  return useGetEditCustomer;
};

export default useGetEditCustomer;
