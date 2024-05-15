const { Schema, model} = require('mongoose')

const Calc = new Schema({
    header: {
        type: String,
        require: true,
    },
    rate: {
        type: Number        
    }
})

module.exports = model('Calc', Calc)