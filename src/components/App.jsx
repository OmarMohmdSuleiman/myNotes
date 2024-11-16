import React, { useState } from "react";
// Importing required components for the App
import Header from "./Header";  // Header component
import Footer from "./Footer";  // Footer component
import Form from "./Form";      // Form component for creating notes
import Note from "./Note";      // Note component to display individual notes

// The main App function component
function App() {
  // State hook to manage the array of notes
  const [notes, setNotes] = useState([]);  // Initialize notes as an empty array

  // Function to handle the creation of a new note
  function CreateNote(newNote) {
    // Update the state with the new note added to the previous notes
    setNotes(prevNotes => {
      return [...prevNotes, newNote];  // Spread the previous notes and add the new one
    });
  }

  // Function to handle note deletion
  function onDelete(id) {
    // Update the state to remove the note with the given id
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;  // Remove the note whose index matches the id
      });
    });
  }

  // The JSX structure returned by the App component
  return (
    <div>
      {/* Render the Header component */}
      <Header />

      {/* Render the Form component and pass the CreateNote function as a prop */}
      <Form onAdd={CreateNote} />

      {/* Render each note using the Note component */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}        // Unique key for each note
            id={index}          // Pass the index as the id for the note
            deleteNote={onDelete}  // Pass the onDelete function to delete notes
            title={noteItem.title}  // Pass the note title
            content={noteItem.content}  // Pass the note content
          />
        );
      })}

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

// Export the App component for use in other parts of the application
export default App;