import React, {useState} from "react"
import { Form } from "semantic-ui-react";

function GifForm({onAddGif , categories, onAddCategory }) {

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
    onAddCategory({currentCategory})
    const newGif = {
    name: formData.name,
      description: formData.description,
      image:formData.image
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

  function handleClick(e){
    setCurrentCategory({
      ...currentCategory,
      [e.target.name]:e.target.value
    })
  }
  

  return (
    <div className="gif-form">
      <h3>Add a new GIF</h3>
      <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" name="name" 
            value={formData.name} 
            onChange={handleChange}/>
          <Form.Input 
            fluid label="description" 
            placeholder="description" 
            name="description" 
            value={formData.description} 
            onChange={handleChange}/>
          <Form.Input
            fluid label="image"
            placeholder="url"
            name="image"
            value={formData.image} 
            onChange={handleChange}
          />
          <select name="category" value={currentCategory} onChange={handleClick}>
         {categories.map((cat)=> (
           <option key={cat}>{cat}</option>
         ))}
        </select>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
      
    </div>
  );
}

export default GifForm;
