// const { patients } = require("../../utils/connectDb")
let prisma = require("../../utils/connectDb")

function createOne(req, res){
  let patient = {...req.body}
  prisma.patients.create({data: patient})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.patients.findMany({ 
    include: {appointments: true},
    orderBy: {lastName: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.patients.findUnique({
    include: {appointments: true},
    where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.patients.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let patient = req.body
  prisma.patients.update({where: {id}, data: patient})
    .then(dbResponse => res.json(dbResponse))
}

function patientsDoctors(req, res){
  let id = Number(req.params.id)
  prisma.appointments.findMany({
    select: {doctor: true},
    where: {patientId: id},
    orderBy: {date: "desc"}})
    .then(dbResponse => res.json(dbResponse))
  }

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne, patientsDoctors}


/*
// Alternative method
function patientsDoctors(req, res){
  let id = Number(req.params.id)
  prisma.appointments.findMany({
    include: {doctor: true, patient: true},  
    where: {patientId: id},
    orderBy: {date: "desc"}})
    .then(dbResponse => res.json(dbResponse.map(appointment => {
      return appointment.doctor.firstName+" "+appointment.doctor.lastName})))
  }


*/