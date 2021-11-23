
const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

const MONGOPASS = process.env.MONGOPASS
const mongo_url =
    `mongodb+srv://new-user:${MONGOPASS}@cluster0.bca6l.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(mongo_url)

const personSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
    minlength: 3,
    unique:true
  },
  number: {
    type:String,
    required:true,
    minlength: 8
  },
  id: Number,
})

personSchema.plugin(uniqueValidator)
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})



module.exports = mongoose.model('Person', personSchema)