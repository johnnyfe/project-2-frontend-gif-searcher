import React, {useState} from "react"
import { Form } from "semantic-ui-react";

function GifForm({onAddGif}) {

  const [formData, setFormData]=useState([]);

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
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
      
    </div>
  );
}

export default GifForm;
