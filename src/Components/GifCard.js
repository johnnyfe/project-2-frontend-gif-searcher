import React from "react"

function GifCard({gif}) {

const {id, name, description, image} = gif

  return (
    <div className="gif-card">
        <img src={image} alt={name}/>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
  );
}

export default GifCard;
