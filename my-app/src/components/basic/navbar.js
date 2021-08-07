import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/previous">Previous Mysteries</Link>
        <Link to="/suggest">Suggest a Mystery</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;