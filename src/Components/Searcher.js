import React from "react";
import "../Style/Searcher.css"

function Searcher({currentSearch, setCurrentSearch}) {

  function handleChange(e){
    setCurrentSearch(e.target.value);
  }
  
return (
  <div className="search-bar">
    <h4>→FIND A GIF HERE←</h4><br/>
    <div className="search-name">
      <label><h5>Search Name--  </h5></label>
      <input placeholder="Name" onChange={handleChange} value={currentSearch}/>
    </div>
  </div>
);
}

export default Searcher;
