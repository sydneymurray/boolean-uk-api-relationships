// const router = require("express").Router()
const express = require("express")  
const appointmentRouter = express.Router()

const appointmentController = require("./controller")

console.log("Router")

appointmentRouter.post("/", appointmentController.createOne)
appointmentRouter.get("/", appointmentController.retrieveAll)
appointmentRouter.get("/bydoctor/:id", appointmentController.byDoctor)
appointmentRouter.get("/bypatient/:id", appointmentController.byPatient)
appointmentRouter.get("/:id", appointmentController.retrieveOne)
appointmentRouter.delete("/:id", appointmentController.deleteOne)
appointmentRouter.patch("/:id", appointmentController.updateOne)

module.exports = appointmentRouter


