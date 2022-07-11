import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams, Route, useLocation } from "react-router-dom";
import { MyContext } from "../../../context/context";
import useGetCustomer from "../../../hooks/sales/costumer/use-customer";

function CostumerList() {
  const { state } = useContext(MyContext);
  const customers = useGetCustomer();
  let { slug } = useParams();
  const [customer, setCustomer] = useState([]);

  console.log(customers);

  const getCustomer = (id, e) => {
    e.preventDefault();
    const url = `https://stormy-garden-64397.herokuapp.com/customers/${id}.json`;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.login.token}`,
        },
      })
      .then((res) => console.log("get Data", res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App-header">
      <div class="sm:grid grid-flow-row auto-rows-max h-56 space-y-4 w-11/12 align-top flex mb-auto mt-5">
        <div className="border-solid border-2 border-gray-100 bg-white text-black text-center h-20 pt-5">
          <h1>
            <b>Customer List {slug}</b>
          </h1>
        </div>

        <div className="border-solid border-2 border-gray-100 bg-white text-black customer-list h-max p-5">
          <h3 className="mb-4">
            <b>Customer</b>
          </h3>
          {customers.map((item) => (
            <NavLink
              to={{
                pathname: `/viewcustomer/${item.id}`,
                state: {
                  id: item.id,
                  phone: item.phone,
                },
                key: item.id,
              }}
              key={item.id}
              // onClick={(e) => getCustomer(item.id, e)}
            >
              <div className="border-solid border-2 border-gray-100 bg-white text-black m-2">
                <h2>{item.phone_number}</h2>
              </div>
            </NavLink>
          ))}

          <div className="grid grid-cols-5 ml-5 mt-5">
            <ul class="inline-flex -space-x-px">
              <li>
                <button
                  onClick={() => console.log("a")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
                >
                  Prev
                </button>
              </li>

              <li>
                <button
                  onClick={() => console.log("a")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
                >
                  01
                </button>
              </li>

              <li>
                <button
                  onClick={() => console.log("a")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
                >
                  02
                </button>
              </li>

              <li>
                <button
                  onClick={() => console.log("a")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
                >
                  03
                </button>
              </li>

              <li>
                <button
                  onClick={() => console.log("a")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostumerList;
