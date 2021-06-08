import React from "react"
import '../Style/Header.css'


function Header() {

  return (
    <div className="header">
      <div className="container">
      <div className="row">
      <div className="col align-self-center">
        <h1>GIFINDER<img src="https://logodix.com/logo/2079450.png" alt="logo-image" /></h1>
      </div>
      </div>
      <div className="col text-start">
        <h5>GIF SEARCHER APP</h5>
      </div>
      </div>
    </div>
  );
}

export default Header;
