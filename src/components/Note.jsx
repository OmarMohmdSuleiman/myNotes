import React from "react";

// Note component to display individual note's details
function Note(props) {

    // Function to handle deletion of a note by calling deleteNote prop
    function handleClick() {
      // Trigger the deleteNote function passed via props from the parent component
      props.deleteNote(props.id);  // The id of the note is passed to delete it
    }
  
    return (
      // Div wrapper for the individual note
      <div className="note">
        
        <h2>{props.title}</h2>
        

        <p>{props.content}</p>
        
        <button className="delete" onClick={handleClick}>
          Delete Note
        </button>
      </div>
    );
  }
  
  export default Note;
  