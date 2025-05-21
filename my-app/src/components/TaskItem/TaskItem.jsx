import { React } from "react";

function TaskItem({ task, onToggle }) {

    return (
        <div>
             <input 
                type="checkbox"
                checked={task.done}
                onChange={onToggle}
             />
            
            <span>
                {task.text}
            </span>

        </div>
    )
}

export default TaskItem;