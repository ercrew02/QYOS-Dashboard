import { Navigate, Route, Routes } from "react-router-dom";
import NavbarIndex from "../components/layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ProtectedRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import CostumerList from "../pages/sales/costumerlist/CostumerList";
import ProductList from "../pages/sales/product/productlist/ProductList";
import AddProduct from "../pages/sales/product/addproduct/AddProduct";
import ViewProduct from "../pages/sales/product/viewproduct/ViewProduct";
import EditProduct from "../pages/sales/product/editproduct/EditProduct";
import DeleteProduct from "../pages/sales/product/deleteproduct/DeleteProduct";
import ViewCustomer from "../pages/sales/costumerlist/viewcustomer/viewCustomer";
import EditCustomer from "../pages/sales/costumerlist/editcustomer/EditCustomer";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<NavbarIndex />}>
          <Route path="/" element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/costumerlist" element={<CostumerList />} />
          <Route exact path="/viewproduct/:id" element={<ViewProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="/deleteproduct" element={<DeleteProduct />} />
          <Route exact path="/viewcustomer/:id" element={<ViewCustomer />} />
          <Route path="/editcustomer/:id" element={<EditCustomer />} />
        </Route>
      </Route>

      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
