import React from "react"

function Searcher({currentSearch, setCurrentSearch}) {

  function handleChange(e){
    setCurrentSearch(e.target.value);
  }
  
return (
  <div className="search">
    <p>Search By:</p>
    <input onChange={handleChange} value={currentSearch}></input>
    <i className="search icon" />
  </div>
);
}

export default Searcher;
