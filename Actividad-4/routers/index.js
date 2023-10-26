const express = require("express")

const router = express.Router()


const usersRouter = require("./users.router")
//const userRouter = require("./users.router")
// const reportRouter = require("./reports.router")

router.use("/users", usersRouter)

module.exports = router