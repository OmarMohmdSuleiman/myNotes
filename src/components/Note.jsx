import React from "react";

function Note(props){

    
    return (<div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button>Delete Note</button>
    </div>);
}

export default Note;