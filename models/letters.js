const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI;

mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB.')
    })
    .catch((err) => console.log(err));

const letterSchema = new mongoose.Schema({
    senderName: {
      type: String, 
      required: true
    },
    recipientName: {
      type: String, 
      required: true
    },
    message: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
});

letterSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Letter', letterSchema);
    