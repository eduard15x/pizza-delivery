import { Link } from "react-router-dom";
const AdminSideNavigation = () => {
  return (
    <ul className="admin-panel__side-nav">
      <Link to="dashboard">Dashboard</Link>
      <Link to="">Products</Link>
      <Link to="">Site Content</Link>
      <Link to="">Offers</Link>
      <Link to="">Go to site</Link>
      <Link to="">Go to site</Link>
    </ul>
  );
};

export default AdminSideNavigation;
