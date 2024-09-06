import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/user/1">USER</Link>
      <Link to="/product">PRODUCT</Link>
    </nav>
  );
};
export default Header;
