import React,{useState} from "react";

function Form(props){

    const [note,setNote]=useState({title: "",
        content: ""});

    function handleChange(e){
        const { name, value } = e.target;
        setNote(prevNote=> {
            return { ...prevNote,[name]: value};
               
            
        });
    }

    function AddNote(e){
        props.onAdd(note);
        setNote({title: "",
            content: ""});
        e.preventDefault();

    }
    return (
        <div className="insert-box">
            <form>
                <input className="input-box" name="title" value={note.title} onChange={handleChange} placeholder="Note title ..."></input>
                <input className="input-box" name="content" value={note.content} onChange={handleChange} placeholder="Note description ..."></input>
                <button id="add" onClick={AddNote}>Add Note</button>
            </form>
        </div>
    );
}

export default Form;