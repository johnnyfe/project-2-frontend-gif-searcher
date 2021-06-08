import React from "react"
import GifCard from "./GifCard";
import { Card } from "semantic-ui-react";

function GifContainer({gifs, onDeleteGif, onUpdatedGif}) {
  
  const gifCollection=gifs.map((gif)=>(
    <GifCard key={gif.id} gif={gif} onDeleteGif={onDeleteGif} onUpdatedGif={onUpdatedGif}/>
  ))

  return (
    <div className="gif-container">
      <Card.Group centered itemsPerRow={4}>
      {gifCollection}
      </Card.Group>
      </div>
  );
}

export default GifContainer;
