import "./App.css"
// this imports react and react components, note {Component} is destructing so we
// can using class App extends Component rather than class App extend React.Component//
import React, { Component } from "react"
import Overview from "./components/Overview"
// this important a library for unique id's using npm install uniqid
//this is useful because normally databases give you a unique ID//
import uniqid from "uniqid"

//now we extend to get access to all components properties
class App extends Component {
    constructor() {
        super()
        // note state has been defined within the constructor//
        this.state = {
            task: { text: "", id: uniqid(), no: 0 },
            tasks: [],
        }
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id,
                no: this.state.tasks.length,
            },
        })
        console.log(this.state)
    }

    onSubmitTask = e => {
        e.preventDefault()
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: { text: "" },
            id: uniqid(),
        })
    }

    render() {
        const { task, tasks } = this.state //destructed state.task state.tasks so can now
        //be used as task and tasks//

        return (
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="taskInput"> Enter task</label>
                    <input
                        onChange={this.handleChange}
                        value={task.text} //we need to specify what the value output should
                        // look like in react//
                        type="text"
                        id="taskInput"
                    />
                    <button type="submit" onClick={this.onSubmitTask}>
                        Add Task
                    </button>
                </form>
                <Overview tasks={tasks} />
            </div>
        )
    }
}

export default App
