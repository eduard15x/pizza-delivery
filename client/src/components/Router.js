import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
// components
import Header from "./Header";
import Footer from "./Footer";
// pages
import Home from "../pages/Home";
import AdminPanel from "../pages/AdminPanel";
import Menu from "../pages/Menu";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import SingleProduct from "../pages/SingleProduct";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";
import MyAccount from "../pages/MyAccount";
import NavBar from "./NavBar";
import AdminSideNavigation from "./admin/AdminSideNavigation";
import AdminOffers from "./admin/AdminOffers";
import AdminSiteContent from "./admin/AdminSiteContent";
import AdminCatalog from "./admin/AdminCatalog";
import AdminDashboard from "./admin/AdminDashboard";
import { useAuthenticationContext } from "../hooks/useAuthenticationContext";

const Router = () => {
  const { user } = useAuthenticationContext();
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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />} />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <LogIn /> : <Navigate to="/" />}
            />
            <Route
              path="/menu/:id"
              element={user ? <SingleProduct /> : <Navigate to="/login" />}
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/my-account"
              element={user ? <MyAccount /> : <Navigate to="/login" />}
            />
          </Route>
          {/* Admin routes and pages */}
          <Route path="/admin" element={<LayoutAdminPanel />}>
            <Route path="" element={<AdminPanel />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="catalog" element={<AdminCatalog />} />
            <Route path="site-content" element={<AdminSiteContent />} />
            <Route path="offers" element={<AdminOffers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
