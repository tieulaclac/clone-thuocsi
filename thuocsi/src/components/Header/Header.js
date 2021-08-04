import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
    <h2>Day la Header</h2>
    <p> Danh sach link</p>
      <ul className="header-ul-mobile">
        <li className="header-li-mobile">
          <Link to="/">Home</Link>
        </li>
        <li className="header-li-mobile">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="header-li-mobile">
          <Link to="/products">Product</Link>
        </li>
        <li className="header-li-mobile">
          <Link to="/login">Login</Link>
        </li>
        <li className="header-li-mobile">
          <Link to="/register">register</Link>
        </li>
      </ul>
    </div>
  );
}
