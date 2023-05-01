import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

//create
//read
//update
//delete
//все это вместе crud

function App() {
    const tasks:TaskType[]=[
        {id:1, title: "Html&CSS",isDone:true},
        {id:2, title: "Js",isDone:true},
        {id:3, title: "React",isDone:false},
    ]
    return (
        <div className="App">
            <Todolist
                tasks={tasks}
                title={"What to learn"}/>


        </div>
    );
}

export default App;
