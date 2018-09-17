var mongoose = require('mongoose');

const authorSchema = mongoose.Schema({    
    firstName: String,
    lastName: String,
    age: Number,
    books: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    description: String,
});

module.exports = mongoose.model('Author', authorSchema);