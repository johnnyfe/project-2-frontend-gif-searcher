import React, { useState } from "react"
import GifCard from "./GifCard";
import Header from "./Header";
import Searcher from "./Searcher";
import GifForm from "./GifForm"
import GifContainer from "./GifContainer"
import GifUpdateForm from "./GifUpdateForm"

function App() {
  const [gifs, setGifs]= useState([]);

  return (
    <div className="App">
      <Header/>
      <GifForm/>
      <Searcher />
      <GifContainer/>
      <GifCard/>
      <GifUpdateForm />
    </div>
  );
}

export default App;
