import React from "react"
import '../Style/Header.css'


function Header() {

  return (
    <div className="header">
      <div className="container">
      <div className="row">
      <div className="col-7 align-self-center">
        <h1>GIFINDER</h1>
      </div>
      <div className="col-1 align-self-start">
        <img src="https://logodix.com/logo/2079450.png" alt="logo-image" />
      </div>
      </div>
        
        <h3>GIF SEARCHER APP</h3>
      </div>
    </div>
  );
}

export default Header;
