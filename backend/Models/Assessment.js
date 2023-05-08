const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  durationInMinutes: {
    type: Number,
  },
  passingPercentage: {
    type: Number,
  },
  questions: [
    {
      statement: {
        type: String,
      },
      options: [{
        type: String,
      }],
      correctOption: {
        type: String,
      }
    }
  ],
});

const Assessment = mongoose.model('Assessment',assessmentSchema);

module.exports = Assessment;
