import React from "react"
import { Card } from "semantic-ui-react";
import "../Style/Card.css"

function GifCard({gif, onDeleteGif, onUpdatedGif}) {

const {id, name, description, image, likes} = gif

function handleDeleteCard(){
    fetch(`http://localhost:3000/gifs/${id}`, {method:"DELETE"})
    onDeleteGif(id)
}

function handleLikeClick() {
    const updatedObj={
        likes:gif.likes+1,
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
    <Card >
        <div className="card">
            <div className="image">
                <img src={image} alt={name}/>
            </div>
            <div className="content">
                <div className="header">{name}</div>
            </div>
            <div className="extra-conten">
                <span >
                    {description}
                    <p>Likes : {likes} </p>
                </span>
                <br/>
                <button onClick={handleLikeClick}>Like</button>
                <button onClick={handleDeleteCard}>Delete</button>
            </div>
        </div>
    </Card>
  )
}

export default GifCard;
