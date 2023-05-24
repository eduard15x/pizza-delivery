import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div>
      <Link to={"/contact"}>Go</Link>
      <p>Hello Admin</p>
      <p>This is admin panel</p>
    </div>
  );
};

export default AdminPanel;
