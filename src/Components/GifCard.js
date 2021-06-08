import React from "react"
import { Card } from "semantic-ui-react";

function GifCard({gif}) {

const {id, name, description, image} = gif

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
                <button>Delete</button>
            </div>
        
        </div>
    </Card>
  )
}

export default GifCard;
