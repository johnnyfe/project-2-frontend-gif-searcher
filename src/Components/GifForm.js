import React, {useState} from "react"
import "../Style/GifForm.css"

function GifForm({onAddGif , categories }) {

  const [formData, setFormData]=useState([]);
  const [currentCategory, setCurrentCategory]=useState([]);

  function handleChange(e){
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(){
      const newGif = {
      name: formData.name,
      description: formData.description,
      image:formData.image,
      category:currentCategory,
      }
      
    fetch("http://localhost:3000/gifs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGif),
    })
    .then(r=>r.json())
    .then(onAddGif)

  }

  return (
    <div className="gif-form">
      <h3>→ADD A NEW GIF HERE←</h3>
      <form onSubmit={handleSubmit}>
      <h4>Name:</h4>
          <input 
            placeholder="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}/>
          <h4>Description:</h4>
          <input
            placeholder="description" 
            name="description" 
            value={formData.description} 
            onChange={handleChange}/>
          <h4>Image:</h4>
          <input
            placeholder="url"
            name="image"
            value={formData.image} 
            onChange={handleChange}
          />
          <h4>Category:</h4>
          {categories && <select name="category" value={currentCategory} onChange={(e)=>setCurrentCategory(e.target.value)}>
         {categories.map((cat)=> (
           <option key={cat}>{cat}</option>
         ))}
        </select>}
        <br/><br/>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default GifForm;
