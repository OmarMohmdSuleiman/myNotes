import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Note from "./Note";

function App(){
    const [notes,setNotes]=useState([]);

    function CreateNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes, newNote];
        });
    }
    function onDelete(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
              return index !== id;
            });
          });
    }
    
    return (<div>
    <Header />
    <h1>Hello There !!!</h1>
    <Form onAdd={CreateNote} />
    {notes.map((noteItem) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
    <Footer />
    </div>);
}

export default App;