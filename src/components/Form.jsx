import React,{useState} from "react";

// Importing useState hook from React
import { useState } from "react";

function Form(props) {
  // Initializing state for note with title and content
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Handle changes in input fields for title and content
  function handleChange(e) {
    const { name, value } = e.target;
    
    // Update the note state with the changed input field value
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  // Add new note by passing the note to the parent component (App) via onAdd prop
  function AddNote(e) {
    props.onAdd(note);  // Pass the note object to the parent function
    setNote({ title: "", content: "" });  // Reset the note input fields after submission
    e.preventDefault();  // Prevent page refresh upon form submission
  }

  return (
    // Wrapper div for the form
    <div className="insert-box">
      
      <form>
        
        <input
          className="input-box"
          name="title"  // Name used to match state key (title)
          value={note.title}  // Controlled input, binds to note.title state
          onChange={handleChange}  // Trigger handleChange on input change
          placeholder="Note title ..."
        />
        
        <input
          className="input-box"
          name="content"  // Name used to match state key (content)
          value={note.content}  // Controlled input, binds to note.content state
          onChange={handleChange}  // Trigger handleChange on input change
          placeholder="Note description ..."
        />
        
        <button id="add" onClick={AddNote}>Add Note</button>
      </form>
    </div>
  );
}

export default Form;