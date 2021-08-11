// const { doctors } = require("../../utils/connectDb")
let prisma = require("../../utils/connectDb")

function createOne(req, res){
  let doctor = {...req.body}
  prisma.doctors.create({data: doctor})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.doctors.findMany({ 
    include: {appointments: true},
    orderBy: {lastName: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.doctors.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.doctors.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let doctor = req.body
  prisma.doctors.update({where: {id}, data: doctor})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne}


