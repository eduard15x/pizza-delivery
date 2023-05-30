import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// components
import Header from "./Header";
import Footer from "./Footer";
// pages
import Home from "../pages/Home";
import AdminPanel from "../pages/AdminPanel";
import Menu from "../pages/Menu";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Test from "../pages/test";
import Dash from "../components/Dash";
import NavBar from "./NavBar";
import AdminSideNavigation from "./admin/AdminSideNavigation";
import AdminOffers from "./admin/AdminOffers";
import AdminSiteContent from "./admin/AdminSiteContent";
import AdminCatalog from "./admin/AdminCatalog";
import AdminDashboard from "./admin/AdminDashboard";

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

  const LayoutAdminPanel = () => {
    return (
      <>
        <NavBar
          className="admin-panel admin-panel__nav-bar"
          pageTitle="Admin Panel"
        />
        <AdminSideNavigation />
        <Outlet />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/admin" element={<LayoutAdminPanel />}>
          <Route path="" element={<AdminPanel />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="catalog" element={<AdminCatalog />} />
          <Route path="site-content" element={<AdminSiteContent />} />
          <Route path="offers" element={<AdminOffers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
