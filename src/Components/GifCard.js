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
                <h6>Name:</h6>
                <div className="header">{editName ? 
                    <p onClick={toggleEditName}>{updateName ? name : newName}</p> : 
                    <div>
                        <input name="Name" placeHolder="Name" value={newName} onChange={handleChangeName}/>
                        <button onClick={toggleEditName}>Toggle Back</button>
                        <button onClick={handleUpdateName}>Update</button>
                    </div>}</div>
            </div>
            <div className="extra-content">
                <h6>Description:</h6>
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
                    <h6>Likes <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                    </svg> : {likes}</h6>
                    <h6>Category: </h6>"{category}"
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
