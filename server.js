const express = require("express")
const app = express();
const PORT = process.env.PORT||5000;
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("connected to database"))
.catch(()=>console.log("connection to database failed"));

app.use(express.json())
app.use("/tasks", require("./routes/tasks"));
app.listen(PORT, () => console.log('listening on port: ${PORT}'));