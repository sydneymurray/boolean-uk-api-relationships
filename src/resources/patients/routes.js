// const router = require("express").Router()
const express = require("express")  
const patientRouter = express.Router()

const patientController = require("./controller")

console.log("Router")

patientRouter.post("/", patientController.createOne)
patientRouter.get("/", patientController.retrieveAll)
patientRouter.get("/:id", patientController.retrieveOne)
patientRouter.delete("/:id", patientController.deleteOne)
patientRouter.patch("/:id", patientController.updateOne)

module.exports = patientRouter


