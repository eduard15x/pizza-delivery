import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// components
import Header from "./Header";
import Footer from "./Footer";
// pages
import Home from "../pages/Home";
import AdminPanel from "../pages/AdminPanel";
import Contact from "../pages/Contact";

const Router = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
        </Route>
        <Route>
          <Route path="/admin" Component={AdminPanel} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
