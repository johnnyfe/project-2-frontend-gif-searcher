import React from "react"
import GifCard from "./GifCard";

function GifContainer({gifs}) {
  console.log(gifs)
  const gifCollection=gifs.map((gif)=>(
    <GifCard key={gif.id} gif={gif}/>
  ))
  return (
    <div className="gif-container">{gifCollection}</div>
  );
}

export default GifContainer;
