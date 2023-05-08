const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  statement: {
    type: String,
    required: true,
  },
  options: [{
    type: String,
    required: true,
  }],
  correctOption: {
    type: String,
    required: true,
  },
});

const assessmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  durationInMinutes: {
    type: Number,
    required: true,
  },
  passingPercentage: {
    type: Number,
    required: true,
  },
  questions: [questionSchema],
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;
