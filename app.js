require("dotenv").config()
const express = require("express")
const todoRouter = require("./Routes/todo.route")
const config = require("./Config/db")
const app = express()
config.connectDB()
app.use(express.json())
app.use("/v1", todoRouter)
app.listen(process.env.PORT, (error) => {
    if (error) {
        return process.exit(1)
    }
    console.log("Server running on port", process.env.PORT)
})