import React,{useState} from "react";

function Form(){

    const [note,setNote]=useState({title: "",
        content: ""});

    function handleChange(e){
        const { name, value } = e.target;
        setNote(prevNote=> {
            return { ...prevNote,[name]: value};
               
            
        });
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