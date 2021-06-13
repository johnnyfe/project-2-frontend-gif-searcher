import React, { useState } from "react"
import "../Style/Card.css"


function GifCard({gif, onDeleteGif, onUpdatedGif}) {

const {id, name, description, image, likes=0, category} = gif

const [editDescription, setEditDescription]=useState(true);
const [newDescription,setNewDescription]= useState([]);
const [updateDescription, setUpdateDescription]=useState(true);


const [editName, setEditName]=useState(true);
const [newName,setNewName]= useState([]);
const [updateName, setUpdateName]= useState(true);



function handleDeleteGif(){
    fetch(`https://project-2-backend-gifinder.herokuapp.com/gifs/${id}`, {method:"DELETE"})
    onDeleteGif(id)
}

function handleLikeClick() {
    const updatedObj={
        likes:gif.likes+1,
    };

    fetch(`https://project-2-backend-gifinder.herokuapp.com/gifs/${id}`,  {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
      })
      .then(r=>r.json())
      .then(onUpdatedGif)
    }

    function handleChangeDescription(e){
    setNewDescription(e.target.value)
    }

    function toggleEditDescription() {
    setEditDescription(!editDescription)
    }

    function handleUpdateDescription(){
    if(newDescription.length!==0){
    setUpdateDescription(!updateDescription)
    } else {
        return setUpdateDescription(updateDescription)
    }
    const updatedObj={
        description:newDescription,
    };

    fetch(`https://project-2-backend-gifinder.herokuapp.com/gifs/${id}`,  {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
      })
      .then(r=>r.json())
      .then(onUpdatedGif)
    }

    function handleChangeName(e){
    setNewName(e.target.value)
    }

    function toggleEditName() {
    setEditName(!editName)
    }
    
    function handleUpdateName(){
    if(newName.length!==0){
    setUpdateName(!updateName)
    } else {
        return setUpdateName(updateName)
    }
    const updatedObj={
        name:newName,
    };

    fetch(`https://project-2-backend-gifinder.herokuapp.com/gifs/${id}`,  {
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

        <div className="card" >
            <div className="image">
                <img src={image} alt={name}/>
            </div>
            <div className="content">
                <div className="header">{editName ? 
                    <p onClick={toggleEditName}>{updateName ? name : newName}</p> : 
                    <div>
                        <input name="Name" placeHolder="Name" value={newName} onChange={handleChangeName}/>
                        <button onClick={toggleEditName}>Toggle Back</button>
                        <button onClick={handleUpdateName}>Update</button>
                    </div>}</div>
            </div>
            <div className="extra-content">
                <span >
                    {editDescription ? 
                    <p onClick={toggleEditDescription}>{updateDescription ? description : newDescription}</p> : 
                    <div>
                        <textarea name="Description" placeHolder="Description" value={newDescription} onChange={handleChangeDescription}/>
                        <br/>
                        <button onClick={toggleEditDescription}>Toggle Back</button>
                        <br/>
                        <button onClick={handleUpdateDescription}>Update</button>
                    </div>}
                    <p>Likes : {likes}  </p>
                    {category}
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
