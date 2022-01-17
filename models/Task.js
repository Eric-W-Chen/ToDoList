const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    user: {
        type: String
    },
    taskBody: {
        type: String
    }
})

module.exports = mongoose.model("task", taskSchema)