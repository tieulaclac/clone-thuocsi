import "./header.css";
import logo from "../../image/Header/logo.svg";
import avatar from "../../image/Header/avatar.jpg";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header_logo">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="header_search">
            <form className="form-inline">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Nhập sản phẩm"
                aria-label="Search"
              />
              <i className="fas fa-search" aria-hidden="true"></i>
            </form>
          </div>

          <div className="header_user">
            <div className="noti">
              <button className="btn-noti">
                <i className="icon_noti far fa-bell"></i>
              </button>
            </div>
            <div className="header_info">
              <div className="header_info_name">Hoàn</div>
              <div className="header_info_avatar">
                <Link to="/">
                  <img className="avatar_img" src={avatar} alt="avatar" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="container">
          <div className="navbar_left">
            <ul className="navbar_ul">
              
              <li className="navbar_li">
                <i className="navbar_icon fas fa-tag"></i>
                <p>Sản phẩm</p>
              </li>
              <li className="navbar_li">
                <i className="navbar_icon fas fa-tag"></i>
                <p>Sản phẩm</p>
              </li>
              <li className="navbar_li">
                <i className="navbar_icon fas fa-tag"></i>
                <p>Sản phẩm</p>
              </li>
              <li className="navbar_li">
                <i className="navbar_icon fas fa-tag"></i>
                <p>Sản phẩm</p>
              </li>
            </ul>
          </div>
          <div className="navbar_search"></div>
          <div className="navbar_right mr-3">
            <Link to="/">
              <button className="btn-cart">
              <i className="icon_cart fas fa-shopping-cart"></i>
              </button>
            </Link>
            <button className="btn-bars">
            <i className="icon_bars fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
