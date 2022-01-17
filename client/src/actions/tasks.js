import axios from 'axios'

export const getTasks = () => {
    console.log("test2")
    return axios.get('/tasks')
}

export const postTasks = (user, taskBody) => {
    return axios.post('/', {user, taskBody})
}
