import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
// uuidv4(); 

function ToDoList() {
    const [tasks,setTasks]=useState([{todo:"sample task",id:uuidv4()}])
    const [newTask,setNewTask]=useState("");

    uuidv4(); 

    //add input value
    const handleInputChange=(event)=>
    {
        setNewTask(event.target.value)
    }

    const addNewTask=()=>{
        setTasks((PrevTask)=>{
          return [...PrevTask, { todo: newTask, id: uuidv4() }];

        });
        setNewTask("")
        
    }
   
  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTask}
        onChange={handleInputChange}
      ></input>
      <br></br>
      <button onClick={addNewTask}>Submit</button>
      <br></br>
      <br></br>
      <br></br>

      <hr></hr>
      <h4>Tasks To Do</h4>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.todo}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList