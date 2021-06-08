import React from "react"

function Searcher({currentSearch, setCurrentSearch}) {

  function handleChange(e){
    setCurrentSearch(e.target.value);
  }
  
return (
  <div className="ui search">
    <p>Search By:</p>
    <div className="ui icon input">
      <input className="prompt" onChange={handleChange} value={currentSearch}/>
    <i className="search icon" />
    </div>
  </div>
);
}

export default Searcher;
