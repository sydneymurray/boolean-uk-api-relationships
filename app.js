var createError = require("http-errors")
var path = require("path")
var cookieParser = ("cookie-parser")

let express = require('express');
let logger = require('morgan');

let doctorRouter = require('./src/resources/doctors/routes')
let patientRouter = require('./src/resources/patients/routes')
let appointmentRouter = require('./src/resources/appointments/routes')

let app = express();

app.use(logger('dev'));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/doctors', doctorRouter);
app.use('/patients', patientRouter);
app.use('/appointments', appointmentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
