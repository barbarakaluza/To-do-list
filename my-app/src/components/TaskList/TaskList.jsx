import { React, useState } from "react";

import TaskItem from "../TaskItem/TaskItem";


function TaskList() {
    const [tasks, setTasks] = useState([
        {id:1, text:"zrobić zakupy", done: false}
    ]);

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) => 
            task.id === id ? {...task, done: !task.done } : task
            )
        )
    }

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskItem
                    task={task}
                    onToggle={() => toggleTask(task.id)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TaskList;