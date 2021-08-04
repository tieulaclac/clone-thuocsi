import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
    <h2>Day la Header</h2>
    <p> Danh sach link</p>
      <ul className="header-ul">
        <li className="header-li">
          <Link to="/">Home</Link>
        </li>
        <li className="header-li">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="header-li">
          <Link to="/products">Product</Link>
        </li>
        <li className="header-li">
          <Link to="/login">Login</Link>
        </li>
        <li className="header-li">
          <Link to="/register">register</Link>
        </li>
      </ul>
    </div>
  );
}
