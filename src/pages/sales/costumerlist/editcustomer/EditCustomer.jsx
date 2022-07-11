import React, { useContext } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MyContext } from "../../../../context/context";
import useGetViewCustomer from "../../../../hooks/sales/costumer/use-viewcustomer";
import Axios from "axios";

function EditCustomer() {
  const activeClassName = "text-black font-medium text-base";
  const { state } = useContext(MyContext);
  const { id } = useParams();
  const getDataUser = useGetViewCustomer(id);
  const url = `https://stormy-garden-64397.herokuapp.com/customers/${id}.json`;

  // inisialisasi state

  const LinkEditCostumer = [
    { name: "Back", path: "/viewcustomer/" + id },
    { name: "Submit", path: "/viewcustomer/" + id, type: "submit" },
  ];

  const [data, setData] = useState({
    phone_number: "",
    id: "",
  });

  function handle(e) {
    const newData = { getDataUser };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function onSubmit(e) {
    e.preventDefault();
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function onClickAlert(e) {
    alert("Data Berhasil Diubah!");
  }

  return (
    <div className="App-header">
      <div className="sm:grid grid-flow-row auto-rows-max h-56 space-y-4 w-11/12 pt-5">
        <div className="border-solid border-2 border-gray-100 bg-white text-black text-center h-20 pt-5">
          <h1>
            <b>Edit Customer</b>
          </h1>
        </div>
      </div>

      <div className="border-solid border-2 border-gray-100 bg-white text-black customer-list h-5/6 w-11/12 ">
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 text-center"
          >
            Phone Number
          </label>
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              id="phone_number"
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto"
              placeholder={getDataUser.phone_number}
              onChange={(e) => handle(e)}
            />

            {/* {LinkEditCostumer.map((item) => (
              <button
                onClick={({ item }) => console.log("a")}
                className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </button>
            ))} */}
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to={{
                pathname: `/viewcustomer/${id}`,
              }}
            >
              <button className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
            </NavLink>

            <button
              className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              to={{
                pathname: `/viewcustomer/${id}`,
              }}
              href={`/viewcustomer/${id}`}
              onClick={(e) => onClickAlert(e)}
            >
              Submit
            </button>
          </form>
        </div>
        {/* {editcustomer.map((item) => (
          <NavLink>
            <div className="border-solid border-2 border-gray-100 bg-white text-black m-2">
              <h2>{item.phone}</h2>
            </div>
          </NavLink>
        ))} */}
      </div>
    </div>
  );
}

export default EditCustomer;
