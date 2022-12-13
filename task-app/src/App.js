import "./App.css"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import uniqid from "uniqid"
const App = () => {
    const [state, setState] = useState(() => {
        return {
            currentTask: {
                text: "",
                key: uniqid(),
            },
            taskArr: [],
        }
    })

    //component//
    const Input = props => {
        // console.log(props)
        return (
            /*element*/ <div>
                <input id="textInput" type="text"></input>
                <button onClick={handleClick}>{props.searchName}</button>
                <p>{props.someText}</p>
            </div>
        )
    }

    const handleClick = () => {
        const input = document.getElementById("textInput")
        setState(prevState => ({
            ...prevState,
            currentTask: { text: input.value, key: uniqid() },
        }))

        setState(prevState => ({
            ...prevState,
            taskArr: [...prevState.taskArr, prevState.currentTask],
        }))
    }

    const Task = props => {
        return (
            <ul>
                <li key={props.taskKey}>{props.todos}</li>
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
                return <Task key={task.key} todos={task.text} id={task.key} />
            })}
        </div>
    )
}

export default App
