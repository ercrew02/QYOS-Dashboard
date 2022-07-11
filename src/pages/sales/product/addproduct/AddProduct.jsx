import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../../../../context/context";
import useAddProduct from "../../../../hooks/sales/product/use-addproduct";
import axios from "axios";

const LinkProductList = [{ name: "Back", path: "/productlist" }];

const addProduct = useAddProduct;

console.log(addProduct);

function AddProduct() {
  const activeClassName = "text-black font-medium text-base";
  const { state } = useContext(MyContext);
  const url = `https://stormy-garden-64397.herokuapp.com/products`;
  const navigate = useNavigate();

  // inisialisasi
  const [addProduct, setAddProduct] = useState({
    principal: "",
    name: "",
    variant: "",
    category: "",
    price: "",
    detail: "",
  });

  function handle(e) {
    const newData = { ...addProduct };
    newData[e.target.id] = e.target.value;
    setAddProduct(newData);
    console.log(addProduct);
  }

  console.log(addProduct.name);

  // add
  const addPost = async (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login.token}`,
      },
      body: JSON.stringify({
        principal: addProduct.principal,
        name: addProduct.name,
        variant: addProduct.variant,
        category: addProduct.category,
        price: addProduct.price,
        detail: addProduct.detail,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("Data Berhasil Ditambahkan!");
  };

  const navigetHome = () => {
    navigate("/productlist");
  };

  return (
    <div className="App-header">
      <div className="sm:grid grid-flow-row auto-rows-max h-56 space-y-4 w-11/12 pt-5">
        <div className="border-solid border-2 border-gray-100 bg-white text-black text-center h-20 pt-5">
          <h1>
            <b>Add Product</b>
          </h1>
        </div>
      </div>

      <div className="border-solid border-2 border-gray-100 bg-white text-black customer-list h-5/6 w-11/12 p-5">
        <form onSubmit={(e) => addPost(e)}>
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
              onChange={(e) => handle(e)}
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
              onChange={(e) => handle(e)}
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
              onChange={(e) => handle(e)}
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
              onChange={(e) => handle(e)}
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
              onChange={(e) => handle(e)}
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
              onChange={(e) => handle(e)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-3/5 mx-auto"
            />
          </div>

          {LinkProductList.map((item) => (
            <div key={item.name} className="mx-6 mb-2">
              <h3 className="mb-2 p-1.5 text-base font-medium inline-block text-gray-400 hover:text-black transition-all duration-280 cursor-pointer">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                  to={item.path}
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
                    {item.name}
                  </button>
                </NavLink>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  onClick={(e) => addPost(e).then(navigetHome)}
                >
                  Submit
                </button>
              </h3>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
