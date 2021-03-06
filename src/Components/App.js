import React, { useState , useEffect } from "react"
import Header from "./Header";
import Searcher from "./Searcher";
import GifForm from "./GifForm"
import GifContainer from "./GifContainer";
import "../Style/App.css"

function App() {
  const [gifs, setGifs]= useState([]);
  const [currentSearch, setCurrentSearch]=useState("");
  const [category, setCategory]=useState(null);

  useEffect(()=>{
    fetch(`https://project-2-backend-gifinder.herokuapp.com/gifs`)
    .then(r=>r.json())
    .then(setGifs)
  },[])

  useEffect(()=>{
    fetch(`https://project-2-backend-gifinder.herokuapp.com/categories`)
    .then(r=>r.json())
    .then(setCategory)
  },[])

  function handleAddGif(newGif){
    const updatedGif=([...gifs,newGif])
    return setGifs(updatedGif)
  }

  function handleDeleteGif(id){
    const updateGif=gifs.filter((gif)=> gif.id!==id)
    return setGifs(updateGif)
  }

  function handleUpdateGif(updatedGif){
    const gifToUpdate=gifs.map((gif)=> 
    gif.id===updatedGif.id ? updatedGif : gif);
    return setGifs(gifToUpdate)
  }

  const gifDisplayed= gifs
    .filter((gif)=> gif.name.toLowerCase().includes(currentSearch.toLowerCase()))

  return (
    <div className="app">
      <Header/>
      <br/>
      {category ? <GifForm onAddGif={handleAddGif} categories={category}/> : <div>Loading</div>}
      <br/>
      <Searcher currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>
      <br/>
      <GifContainer gifs={gifDisplayed}  onDeleteGif={handleDeleteGif} onUpdatedGif={handleUpdateGif}/>
      </div>
  );
}

export default App;
