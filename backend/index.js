let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

// Express Route
const studentRoute = require('../backend/routes/student.route')

const courseRoute = require('../backend/routes/course.route')

const materialRoute = require('../backend/routes/material.route')

const assessmentRoute = require('../backend/routes/assessment.route')

const adminRoute = require('../backend/routes/admin.route')

// Connecting mongoDB Database
mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase')
  .then((x) =>
  {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) =>
  {
    console.error('Error connecting to mongo',err.reason)
  })

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students',studentRoute)
app.use('/courses',courseRoute)
app.use('/materials',materialRoute)
app.use('/assessments',assessmentRoute)
app.use('/admins',adminRoute)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port,() =>
{
  console.log('Connected to port ' + port)
})


app.use(function (err,req,res,next)
{
  console.error(err.message);
  if (!err.statusCode) 
  {
    console.log("Error: ",err);
    err.statusCode = 500;
  }
  res.status(err.statusCode).send(err.message);
});
