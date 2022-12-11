import "./App.css"
import React, { useState } from "react"
import ReactDOM from "react-dom"
// import uniqid from "uniqid"
const App = () => {
    //component//
    const Input = props => {
        console.log(props)
        return (
            /*element*/ <div>
                <input id="textInput" type="text"></input>
                <button onClick={handleClick.bind(todos, setTodos)}>
                    {props.searchName}
                </button>
                <p>{props.someText}</p>
            </div>
        )
    }

    const handleClick = (state, setState) => {
        const textInput = document.getElementById("textInput")
        console.log(textInput.value)
    }

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

    const [todos, setTodos] = useState([
        { id: 1, name: "Todo 1", complete: false },
        { id: 2, name: "Todo 2", complete: false },
        { id: 3, name: "Todo 3", complete: false },
    ])

    return (
        <div>
            <Input searchName="Add Task" someText="Lover of todos" />
            {todos.map(task => {
                return <Task todos={task.name} />
            })}
        </div>
    )
}

export default App
