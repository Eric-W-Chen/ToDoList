import {getTasks} from '../actions/tasks'
import {useEffect, useState} from "react"

const TaskIndex = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        console.log("test")
        getTasks().then(res => setTasks(res.data))
    }, [])

    return (
        <div>
            <h1>Task Index</h1>
            {
            tasks.map(task => {
                    return (<p> {task.user} needs to do {task.taskBody} </p>) //check routes for tasks to see what it's returning
                })
            }
        </div>
    )
}
export default TaskIndex