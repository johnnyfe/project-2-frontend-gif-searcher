import React from "react"
import { Card } from "semantic-ui-react";

function GifCard({gif, onDeleteCard}) {

const {id, name, description, image} = gif

function handleDeleteCard(){
    fetch(`http://localhost:3000/gifs/${id}`, {method:"DELETE"})
    onDeleteCard(id)
}

  return (
    <Card>
        <div >
            <div className="image">
                <img src={image} alt={name}/>
            </div>
            <div className="content">
                <div className="header">{name}</div>
            </div>
            <div className="extra-content">
                <span>
                    <i className="icon heartbeat red"/>
                    {description}
                </span>
                <br/>
                <button onClick={handleDeleteCard}>Delete</button>
            </div>
        
        </div>
    </Card>
  )
}

export default GifCard;
