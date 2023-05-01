import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

//create
//read
//update
//delete
//все это вместе crud

export type FilterValuesType = "all"|"active"|"completed"

function App() {
    const title:string ="What to learn"

   const [tasks, setTasks]=useState<TaskType[]>(
       [
           {id:1, title: "Html&CSS",isDone:true},
           {id:2, title: "Js",isDone:true},
           {id:3, title: "React",isDone:false},
           {id:4, title: "Попить пива!",isDone:false},
       ]
    )


    const[filter, setFilter]= useState<FilterValuesType>("all")
    const changeFilter=(filter:FilterValuesType)=>{
        setFilter(filter)
    }


    const removeTask =(taskId:number)=>{
        const updatedTasks=tasks.filter((task)=>task.id !==taskId)
        setTasks((updatedTasks))
    }

    const getFiltredTasks = (tasks: Array<TaskType>,filter:FilterValuesType):Array<TaskType> =>
    {
switch (filter){
    case "active":
        return tasks.filter(t=>!t.isDone)
    case "completed":
        return tasks.filter(t=>t.isDone)
    default:
        return tasks
}
    }
const filtredTasks:Array<TaskType> = getFiltredTasks(tasks,filter)

    return (
        <div className="App">
            <Todolist
                tasks={filtredTasks}
                title={title}
                removeTask={removeTask} changeFilter={changeFilter}/>



        </div>
    );
}

export default App;
