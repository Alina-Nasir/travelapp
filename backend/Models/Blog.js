const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blogSchema = new Schema({
  title: {
    type: String
  },
  text: {
    type: String
  },
  image: {
    type: String
  },
  pic2: {
    type: String
  },
  pic3: {
    type: String
  },
  description: {
    type: String
  },
  
}, {
    collection: 'blogpost'
  })

module.exports = mongoose.model('Blog', blogSchema)