import React, { useState , useEffect } from "react"
import Header from "./Header";
import Searcher from "./Searcher";
import GifForm from "./GifForm"
import GifContainer from "./GifContainer";
import { Container } from "semantic-ui-react";

function App() {
  const [gifs, setGifs]= useState([]);
  const [currentSearch, setCurrentSearch]=useState("");
  const [category, setCategory]=useState("ALL")

  useEffect(()=>{
    fetch(`http://localhost:3000/gifs`)
    .then(r=>r.json())
    .then(setGifs)
  },[])

  useEffect(()=>{
    fetch(`http://localhost:3000/categories`)
    .then(r=>r.json())
    .then(setCategory)
  },[])

  function handleAddGif(newGif){
    const updatedGif=([...gifs,newGif])
    return setGifs(updatedGif)
  }

  function handleDeleteGif(deletedGif){
    const updateGif=gifs.filter((gif)=> gif.id!==deletedGif.id)
    return setGifs(updateGif)
  }

  function handleUpdateGif(updatedGif){
    const gifToUpdate=gifs.map((gif)=> 
    gif.id===updatedGif.id ? updatedGif : gif);
    return setGifs(gifToUpdate)
  }

  const gifDisplayed= gifs
    .filter((gif)=> gif.name.toLowerCase().includes(currentSearch.toLowerCase()));
  
  return (
    <Container>
      <Header/>
      <br/>
      <GifForm onAddGif={handleAddGif}/>
      <br/>
      <Searcher currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>
      <br/>
      <GifContainer gifs={gifDisplayed} onDeleteGif={handleDeleteGif} onUpdatedGif={handleUpdateGif}/>
    </Container>
  );
}

export default App;
