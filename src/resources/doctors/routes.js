// const router = require("express").Router()
const express = require("express")  
const doctorRouter = express.Router()

const doctorController = require("./controller")

console.log("Router")

doctorRouter.post("/", doctorController.createOne)
doctorRouter.get("/", doctorController.retrieveAll)
doctorRouter.get("/:id", doctorController.retrieveOne)
doctorRouter.delete("/:id", doctorController.deleteOne)
doctorRouter.patch("/:id", doctorController.updateOne)

module.exports = doctorRouter


