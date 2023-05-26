import { Link, Outlet } from "react-router-dom";
const AdminPanel = () => {
  return (
    <div className="admin-panel">
      {/* <NavBar className="admin-panel__nav-bar" pageTitle="Admin Panel" /> */}
      <p>Hello Admin</p>
      <p>This is admin panel</p>
      <Outlet />
    </div>
  );
};

export default AdminPanel;
