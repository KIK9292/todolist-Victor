import React from 'react';
import {FilterValuesType} from "./App";
import {Simulate} from "react-dom/test-utils";


export type TodolistPropsType={
    title:string;
    tasks:TaskType[]
    removeTask:(tasksId:number)=>void
    changeFilter:(filter:FilterValuesType)=>void
}

export type TaskType ={
    id:number;
    title:string;
    isDone:boolean;

}

const Todolist: React.FC<TodolistPropsType> =({tasks,title,removeTask,changeFilter}) => {

const tasksJSX:Array<JSX.Element> =tasks.map((tasks)=>{
    return(
        <li key={tasks.id}>
            <input type="checkbox" checked={tasks.isDone}/>
    <span>{tasks.title}</span>
            <button onClick={()=>removeTask(tasks.id)}>x</button>
</li>)}
    )
    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button onClick={()=>changeFilter("all")}>All</button>
                <button onClick={()=>changeFilter("active")}>Active</button>
                <button onClick={()=>changeFilter("completed")}>Completed</button>
            </div>
        </div>
            

    );
};

export default Todolist;