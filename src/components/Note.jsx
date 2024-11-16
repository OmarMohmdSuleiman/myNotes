import React from "react";

function Note(props){

    function handleClick(){
        props.deleteNote(props.id);
    }
    return (<div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={handleClick}>Delete Note</button>
    </div>);
}

export default Note;