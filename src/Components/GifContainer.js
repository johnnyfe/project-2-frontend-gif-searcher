import React from "react"
import GifCard from "./GifCard";
import { Card } from "semantic-ui-react";

function GifContainer({gifs}) {
  
  const gifCollection=gifs.map((gif)=>(
    <GifCard key={gif.id} gif={gif}/>
  ))
  return (
    <div className="gif-container">
      <Card.Group itemsPerRow={4}>
      {gifCollection}
      </Card.Group>
      </div>
  );
}

export default GifContainer;
