import React from "react"
import '../Style/Header.css'


function Header() {

  return (
    <div className="header">
      <div className="title">
        <h1>GIFINDER<img src="https://logodix.com/logo/2079450.png" alt="logo" /></h1>
      </div>
      <div className="sub-title">
        <h3>GIF SEARCHER APP</h3>
      </div>
    </div>
  );
}

export default Header;
