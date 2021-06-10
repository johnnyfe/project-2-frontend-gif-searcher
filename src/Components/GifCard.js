import React, { useState } from "react"
import { Card } from "semantic-ui-react";
import "../Style/Card.css"
import GifUpdateForm from "./GifUpdateForm";

function GifCard({gif, onDeleteGif, onUpdatedGif}) {

const {id, name, description, image, likes, category} = gif
const [showUpdateForm, setShowUpdateForm]=useState(true);

function handleDeleteGif(){
    fetch(`http://localhost:3000/gifs/${id}`, {method:"DELETE"})
    onDeleteGif(id)
}

function handleLikeClick() {
    const updatedObj={
        likes:gif.likes+1
    };

    fetch(`http://localhost:3000/gifs/${id}`,  {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
      })
      .then(r=>r.json())
      .then(onUpdatedGif)
}

  return (

        <div className="card">
            <div className="image">
                <img src={image} alt={name}/>
            </div>
            <div className="content">
                <div className="header">{name}</div>
            </div>
            <div className="extra-content">
                <span >
                    {description}
                    <p>Likes : {likes}  </p>
                    <p>Category: <br/>{category} </p>
                </span>
            <div className="buttons">
                <button onClick={handleLikeClick}>Like</button>
                <br/>
                <button onClick={handleDeleteGif}>Delete</button>
            </div>
            </div>
        </div>
  )
}

export default GifCard;
