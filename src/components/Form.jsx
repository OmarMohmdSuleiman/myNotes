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
                <input placeholder="Note title ..."></input>
                <input placeholder="Note description ..."></input>
                <button>Add Note</button>
            </form>
        </div>
    );
}

export default Form;