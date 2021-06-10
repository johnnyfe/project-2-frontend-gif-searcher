import React from "react"



function Searcher({currentSearch, setCurrentSearch}) {

  function handleChange(e){
    setCurrentSearch(e.target.value);
  }
  
return (
  <div className="search-bar">
    <p>Search By:</p>
    <div className="search-name">
      <input placeholder="Name" onChange={handleChange} value={currentSearch}/>
    </div>
  </div>
);
}

export default Searcher;
