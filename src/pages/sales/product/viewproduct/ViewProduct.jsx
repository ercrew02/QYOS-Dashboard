import React, { useContext } from "react";
import {
  Link,
  NavLink,
  Route,
  useHref,
  useParams,
  useNavigate,
} from "react-router-dom";
import { MyContext } from "../../../../context/context";
import useGetViewProduct from "../../../../hooks/sales/product/use-viewproduct";

function ViewProduct(props) {
  const activeClassName = "text-black font-medium text-base";
  const { state } = useContext(MyContext);
  const { id } = useParams();
  const getDataId = useGetViewProduct(id);
  const url = `https://stormy-garden-64397.herokuapp.com/products/${id}.json`;
  const navigate = useNavigate();

  const LinkViewProduct = [
    { name: "Back", path: "/productlist" },
    { name: "Edit", path: `/editproduct/${id}`, state: { id: "id" } },
  ];

  // delete
  const deletePost = async (e) => {
    e.preventDefault();
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("Data Berhasil Dihapus!");
  };

  const navigetHome = () => {
    navigate("/productlist");
  };

  return (
    <div className="App-header">
      <div className="sm:grid grid-flow-row auto-rows-max h-56 space-y-4 w-11/12 p-5">
        <div className="border-solid border-2 border-gray-100 bg-white text-black text-center h-20 pt-5">
          <h1>
            <b>View Product</b>
          </h1>
        </div>
      </div>

      <div className="border-solid border-2 border-gray-100 bg-white text-black customer-list h-5/6 w-11/12 p-5">
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 text-center"
          >
            Brand Prinsipal
          </label>
          <div className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto text-center text-lg">
            {getDataId.principal}
          </div>
        </div>

        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 text-center"
          >
            Product Name
          </label>
          <div className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto text-center text-lg">
            {getDataId.name}
          </div>
        </div>

        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 text-center"
          >
            Product Variant
          </label>
          <div className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto text-center text-lg">
            {getDataId.variant}
          </div>
        </div>

        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 text-center"
          >
            Category Product
          </label>
          <div className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto text-center text-lg">
            {getDataId.category}
          </div>
        </div>

        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 text-center"
          >
            Price
          </label>
          <div className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto text-center text-lg">
            {getDataId.price}
          </div>
        </div>

        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 text-center"
          >
            Product Details
          </label>
          <div className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto text-center text-lg">
            {getDataId.detail}
          </div>
        </div>

        {LinkViewProduct.map((item) => (
          <button
            onClick={() => console.log("a")}
            className=" ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
        ))}

        <button
          className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          redirect="/productlist"
          onClick={(e) => deletePost(e).then(navigetHome)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ViewProduct;
