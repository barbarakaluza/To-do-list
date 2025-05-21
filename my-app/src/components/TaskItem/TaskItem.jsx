import { React } from "react";

function TaskItem({ id, text }) {

    return (
        <div>
             <li id={id}>{text}</li>
             <input type="checkbox"></input>
        </div>
       
        
    )
}

export default TaskItem;