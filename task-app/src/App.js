import "./App.css"
import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import uniqid from "uniqid"
import root from "./index"

const App = () => {
    const [state, setState] = useState(() => {
        return {
            currentTask: {
                text: "",
                key: uniqid(),
                no: 0,
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
            </div>
        )
    }

    const handleClick = () => {
        const input = document.getElementById("textInput")
        setState(prevState => ({
            ...prevState,
            currentTask: {
                text: input.value,
                key: uniqid(),
                no: prevState.taskArr.length,
            },
        }))

        setState(prevState => ({
            ...prevState,
            taskArr: [...prevState.taskArr, prevState.currentTask],
        }))
    }

    const handleDelete = targetKey => {
        setState(prevState => ({
            currentTask: {
                text: "",
                key: uniqid(),
                no: state.taskArr.length,
            },
            taskArr: prevState.taskArr.filter(item => item.key !== targetKey),
        }))
    }
    // CREATES TASK ELEMENT//
    const Task = props => {
        return (
            <li key={props.taskKey}>
                {props.todos} {props.no}
                <button onClick={handleDelete.bind(null, props.id)}>
                    delete
                </button>
            </li>
        )
    }

    Task.defaultProps = {
        text: ["b", "c", "d"],
    }

    return (
        <div>
            <Input searchName="Add Task" />

            {state.taskArr.map(task => {
                return (
                    <Task
                        key={task.key}
                        todos={task.text}
                        id={task.key}
                        no={task.no}
                    />
                )
            })}
        </div>
    )
}

export default App
