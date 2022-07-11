import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import "../../App.css";
import useGetProducts from "../../hooks/sales/product/use-products";

function Home() {
  const { state } = useContext(MyContext);
  const products = useGetProducts();

  console.log(state.login.token);
  products.map((item) => console.log(item.name));
  console.log(products);

  return (
    <>
      <head>
        <title>Home Function</title>
      </head>
      <div className="App-header">
        <div class="grid grid-flow-row auto-rows-max h-56 space-y-4 grid-content flex mb-auto mt-5">
          <div className="border-solid border-2 border-gray-100 bg-white text-black rounded-lg content-top p-5">
            <h1>Dengan Refill, QYOS Menguntungkan Semua pihak!</h1>
          </div>

          <div className="my-40 border-solid border-2 border-gray-100 bg-white text-black content-kedua rounded-lg">
            <h3 className="mb-5">
              <b>Product Best Seller</b>
            </h3>

            <div className="flex justify-center">
              <ul class="list-group isi mt-3">
                {products.map((item) => (
                  <a href="#" class="nav-link active isi" aria-current="page">
                    <li class="list-group-item d-flex flex justify-center align-items-center mb-2 border-2 border-slate-400 p-2 rounded-md">
                      <img
                        src="https://w7.pngwing.com/pngs/819/96/png-transparent-rinso-hd-logo.png"
                        alt=""
                      />
                      <h4>{item.name}</h4>
                      <p>{item.principal}</p>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
