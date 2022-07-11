import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MyContext } from "../../../../context/context";
import useGetViewProduct from "../../../../hooks/sales/product/use-viewproduct";
import axios from "axios";

function EditProduct() {
  const activeClassName = "text-black font-medium text-base";
  const { state } = useContext(MyContext);
  const { id } = useParams();
  const getDataId = useGetViewProduct(id);
  const url = `https://stormy-garden-64397.herokuapp.com/products/${id}.json`;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [principal, setPrincipal] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");
  const [variant, setVariant] = useState("");

  const getPostById = async () => {
    const response = await axios.get(url);
    const data = response.data;

    setName(data.name);
    setPrice(data.price);
    setPrincipal(data.principal);
    setCategory(data.category);
    setDetail(data.detail);
    setVariant(data.variant);
  };

  // update
  const updatePost = async (e) => {
    e.preventDefault();
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login.token}`,
      },
      body: JSON.stringify({
        name,
        price,
        principal,
        category,
        detail,
        variant,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("Data Berhasil Diubah!");
  };

  return (
    <div className="App-header">
      <div className="sm:grid grid-flow-row auto-rows-max h-56 space-y-4 w-11/12 pt-5">
        <div className="border-solid border-2 border-gray-100 bg-white text-black text-center h-20 pt-5">
          <h1>
            <b>Edit Product</b>
          </h1>
        </div>
      </div>

      <div className="border-solid border-2 border-gray-100 bg-white text-black customer-list h-5/6 w-11/12 p-5">
        <form onSubmit={updatePost}>
          <div className="mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 text-center"
            >
              Brand Prinsipal
            </label>
            <input
              type="text"
              id="principal"
              name="principal"
              placeholder={getDataId.principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto"
            />
          </div>

          <div className="mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 text-center"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={getDataId.name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto"
            />
          </div>

          <div className="mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 text-center"
            >
              Product Variant
            </label>
            <input
              type="text"
              id="variant"
              name="variant"
              placeholder={getDataId.variant}
              onChange={(e) => setVariant(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto"
            />
          </div>

          <div className="mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 text-center"
            >
              Category Product
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder={getDataId.category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto"
            />
          </div>

          <div className="mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 text-center"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder={getDataId.price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto"
            />
          </div>

          <div className="mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 text-center"
            >
              Product Details
            </label>
            <input
              type="text"
              id="detail"
              name="detail"
              placeholder={getDataId.detail}
              onChange={(e) => setDetail(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto"
            />
          </div>

          {/* {LinkEditProduct.map((item) => (
            <button
              onClick={() => console.log("a")}
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

          <button className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to={{
                pathname: `/viewproduct/${id}`,
              }}
            >
              Back
            </NavLink>
          </button>
          <button
            className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to={{
              pathname: `/viewproduct/${id}`,
            }}
            href={`/viewproduct/${id}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
