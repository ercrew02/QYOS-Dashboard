import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MyContext } from "../../../../context/context";
import useGetProducts from "../../../../hooks/sales/product/use-products";

const LinkAddProduct = [{ name: "Add", path: "/addproduct" }];
const linkProductView = [
  { name: "Product View", path: "./viewproduct/ViewProduct" },
];

function ProductList() {
  const activeClassName = "text-black font-medium text-base";
  const { state } = useContext(MyContext);
  const products = useGetProducts();
  let { slug } = useParams();
  const [product, setProducts] = useState([]);

  console.log(products);

  const getProduct = (id, e) => {
    e.preventDefault();
    const url = `https://stormy-garden-64397.herokuapp.com/products/${id}.json`;
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
        <div className="border-solid border-2 border-gray-100 bg-white text-black text-center h-20 pt-5 mb-5">
          <h1>
            <b>Product List</b>
          </h1>
        </div>

        {LinkAddProduct.map((item) => (
          <div key={item.name} className="mx-6 mb-2 ml-auto button-add">
            <h3 className="mb-2 p-1.5 text-base font-medium inline-block text-gray-400 hover:text-black transition-all duration-280 cursor-pointer">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                to={item.path}
              >
                <button
                  onClick={() => console.log("a")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {item.name}
                </button>
              </NavLink>
            </h3>
          </div>
        ))}

        <div className="border-solid border-2 border-gray-100 bg-white text-black customer-list h-max mt-5 p-5">
          <h3>
            <b>Product</b>
          </h3>
          {products.map((item) => (
            <NavLink
              to={{
                pathname: `/viewproduct/${item.id}`,
                state: {
                  id: item.id,
                  principal: item.principal,
                  name: item.name,
                  variant: item.variant,
                  category: item.category,
                  price: item.price,
                  detail: item.detail,
                },
              }}
              key={item.id}
            >
              <div className="border-solid border-2 border-gray-100 bg-white text-black m-2">
                <h1>
                  <b>{item.name}</b>
                </h1>
                <h2>{item.principal}</h2>
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

export default ProductList;
