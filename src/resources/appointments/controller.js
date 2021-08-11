let prisma = require("../../utils/connectDb")

function createOne(req, res){
  let appointment = {...req.body}
  appointment.date = new Date(appointment.date)
  prisma.appointments.create({data: appointment})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.appointments.findMany({ 
    orderBy: {date: "desc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (typeof id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.appointments.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.appointments.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let appointment = req.body
  prisma.appointments.update({where: {id}, data: appointment})
    .then(dbResponse => res.json(dbResponse))
}

function byDoctor(req, res){
  let id = Number(req.params.id)
  prisma.appointments.findMany({
    where: {doctorId: id},
    orderBy: {date: "desc"}})
    .then(dbResponse => res.json(dbResponse))
}

function byPatient(req, res){
  let id = Number(req.params.id)
  prisma.appointments.findMany({ 
    where: {patientId: id},
    orderBy: {date: "desc"}})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne, byDoctor, byPatient}


