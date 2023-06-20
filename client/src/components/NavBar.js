const NavBar = ({ className, pageTitle }) => {
  return (
    <nav className={`${className}`}>
      <p className="nav-bar--logo"></p>
      <h2 className="nav-bar--title">{pageTitle}</h2>
      <button className="nav-bar--login">Log In</button>
      <button className="d-none">Log Out</button>
    </nav>
  );
};

export default NavBar;
