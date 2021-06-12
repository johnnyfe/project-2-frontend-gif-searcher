import React from "react"
import GifCard from "./GifCard";
import "../Style/GifContainer.css"

function GifContainer({gifs, onDeleteGif, onUpdatedGif}) {
  
  const gifCollection=gifs.map((gif)=>(
    <GifCard key={gif.id} gif={gif} onDeleteGif={onDeleteGif} onUpdatedGif={onUpdatedGif}/>
  ))

  return (
    <div className="gif-container">
      <h5> CLICK NAME OR DESCRIPTION TO EDIT </h5>
      <div className="gif-cards">
        {gifCollection}
      </div>
    </div>
  );
}

export default GifContainer;
