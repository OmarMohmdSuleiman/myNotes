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
        <div>
            <form>
                <input name="title" value={note.title} onChange={handleChange} placeholder="Note title ..."></input>
                <input name="content" value={note.content} onChange={handleChange} placeholder="Note description ..."></input>
                <button>Add Note</button>
            </form>
        </div>
    );
}

export default Form;