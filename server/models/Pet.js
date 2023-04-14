
const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: null
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    age: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        deafault: 'male'
    },
    breed:{
        type: String,
        default: 'Breed not Specified.'
    }
},

{timestamps:true})


module.exports = mongoose.model('Pet',dogSchema);