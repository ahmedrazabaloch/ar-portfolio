import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="main-logo">Ahmed Raza</p>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
