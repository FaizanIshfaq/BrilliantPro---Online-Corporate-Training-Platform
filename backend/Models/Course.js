const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  instructor: {
    type: String,
    // required: true
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'Student'
  }]
}, {
  collection: 'courses'
})

module.exports = mongoose.model('Course', courseSchema)
