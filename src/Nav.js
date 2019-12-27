import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <a className="nav__elem" href="#">
        통근 버스
      </a>
      <a className="nav__elem" href="#">
        순환 버스
      </a>
    </div>
  );
}

export default Nav;
