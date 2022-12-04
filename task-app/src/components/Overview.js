import App from "../App"

export default function overview({ task }) {
    return (
        <div className="task-container">
            <h1 className="task">{task}</h1>
        </div>
    )
}
