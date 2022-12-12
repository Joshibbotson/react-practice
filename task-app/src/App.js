import "./App.css"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import uniqid from "uniqid"
const App = () => {
    const [state, setState] = useState({
        currentTask: {
            text: "",
        },
        taskArr: [{ text: "todo1" }],
    })

    //component//
    const Input = props => {
        console.log(props)
        return (
            /*element*/ <div>
                <input
                    id="textInput"
                    type="text"
                    onChange={handleChange.bind()}
                ></input>
                <button onClick={handleClick.bind()}>{props.searchName}</button>
                <p>{props.someText}</p>
            </div>
        )
    }

    const handleChange = () => {
        // setTasks({
        //     text: value,
        //     no: 1,
        //     id: uniqid(),
        // })
    }

    const handleClick = () => {}

    const Task = props => {
        return (
            <ul>
                <li>{props.todos}</li>
            </ul>
        )
    }

    Task.defaultProps = {
        text: ["b", "c", "d"],
    }

    return (
        <div>
            <Input searchName="Add Task" someText="Lover of todos" />

            {state.taskArr.map(task => {
                return <Task todos={task.text} />
            })}
        </div>
    )
}

export default App
