const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    // required: true
  }
}, {
  timestamps: true,
  collection: 'materials'
});

module.exports = mongoose.model('Material', materialSchema);
