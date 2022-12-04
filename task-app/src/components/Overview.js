// overview function is a component//

import React from "react"

const Overview = props => {
    const { tasks } = props //destructing so no longer need props.tasks//

    //simply uses .map to create a <li> item for each task within a new array, it returns
    // a new array with all of these list items//
    return (
        <ul>
            {tasks.map(task => {
                return (
                    <li key={task.id}>
                        {task.no}
                        {") "}
                        {task.text}
                    </li>
                )
            })}
        </ul>
    )
}

export default Overview
