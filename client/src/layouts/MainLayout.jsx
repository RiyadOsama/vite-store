import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import ProductForm from "../pages/ProductForm";
import NotFound from "../pages/NotFound";

function MainLayout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="productList" element={<ProductList />} />
            <Route path="productList/new" element={<ProductForm />} />
            <Route path="productList/:id" element={<ProductDetails />} />
            <Route path="productList/:id/edit" element={<ProductForm />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainLayout;
