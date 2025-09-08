import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
