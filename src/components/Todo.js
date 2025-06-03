import React, { useState } from "react"

export default function Todo(){

    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState("");

    const addTask = ()=>{
        if(task.length>0){
            setTodo([...todo,task]);
            setTask("");
        }
    }
    const handleDelete=(id)=>{
        const filterTodo = todo.filter((todos,index)=>{
            if(index !==id){
                return todos;
            }
        })
        setTodo(filterTodo);
    }
    return(
        <>
        <div className="input-btn-container">
            <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
            <button onClick={()=>{addTask()}}>Add Todo</button>
        </div>
        <div className="todos">
            {todo.map((todos,index)=>{
                return(
                    <div key={index}>
                        <span>{todos}</span>
                        <button onClick={()=>{handleDelete(index)}}>Delete</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}