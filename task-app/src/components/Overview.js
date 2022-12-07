// overview function is a component//

import App from "../App"
import React, { Component } from "react"
//simply uses .map to create a <li> item for each task within a new array, it returns
// a new array with all of these list items//

class Overview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {this.props.toMap.map(task => {
                    return (
                        <li key={task.id}>
                            {task.no}
                            {") "}
                            {task.text}
                            <button
                                onClick={() => this.props.onDeleteBtn(task.id)}
                            >
                                delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Overview
