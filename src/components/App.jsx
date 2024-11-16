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
    
    return (<div>
    <Header />
    <h1>Hello There !!!</h1>
    <Form onAdd={CreateNote} />
    <Note />
    <Footer />
    </div>);
}

export default App;