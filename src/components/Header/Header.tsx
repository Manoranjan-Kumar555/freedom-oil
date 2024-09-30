import React from "react";
import "../Header/Header.scss";
import hamburger from "./../../assets/images/menu.png";
import logo from "./../../assets/images/freedom-logo.png"

interface HeaderProps {
  click: () => void;
}
const Header: React.FC<HeaderProps> = ({ click }) => {
  return (
    <div>
      <div className="header">
        <div className="freedom-menu-container">
        <img className="hanburger-menu" src={hamburger} onClick={click} alt="" />
        </div>
        <div className="freedom-logo-container">
        <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
