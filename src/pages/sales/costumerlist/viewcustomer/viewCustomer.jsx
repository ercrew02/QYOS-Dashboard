import React, { useCallback, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, resolvePath, useLocation, useParams } from "react-router-dom";
import { MyContext } from "../../../../context/context";
import useGetViewCustomer from "../../../../hooks/sales/costumer/use-viewcustomer";
import axios from "axios";

function ViewCustomer(props) {
  const activeClassName = "text-black font-medium text-base";
  const { state } = useContext(MyContext);
  let { slug } = useParams();
  // const [customer, setCustomer] = useState({});
  const { id } = useParams();
  const getDataId = useGetViewCustomer(id);

  // useEffect(() => {
  //   fetch(
  //     `https://stormy-garden-64397.herokuapp.com/customers/` +
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${state.login.token}`,
  //         },
  //       }
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setCustomer(result);
  //     });
  // });

  // console.log(this.props.match.params.id);

  return (
    <div className="App-header">
      <div className="sm:grid grid-flow-row auto-rows-max h-56 space-y-4 w-11/12 pt-5 flex">
        <div className="border-solid border-2 border-gray-100 bg-white text-black text-center h-20 pt-5">
          <h1>
            <b>View Customer</b>
          </h1>
        </div>
      </div>

      <div className="border-solid border-2 border-gray-100 bg-white text-black customer-list h-5/6 w-11/12 p-5">
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 text-center"
          >
            Phone Number
          </label>

          <h4>{getDataId.phone_number}</h4>
        </div>

        <button
          onClick={() => console.log("a")}
          className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to={{
              pathname: `/costumerlist`,
              state: {
                id: getDataId.id,
                phone: getDataId.phone,
              },
            }}
          >
            Back
          </NavLink>
        </button>

        <button
          onClick={() => console.log("a")}
          className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to={{
              pathname: `/editcustomer/${getDataId.id}`,
              state: {
                id: getDataId.id,
                phone: getDataId.phone,
              },
            }}
          >
            Edit
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default ViewCustomer;
