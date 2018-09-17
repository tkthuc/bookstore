const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: String,
    publishedDate: Date,
    authors: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
    description: String,
    price: Number,
    cover: String
})

module.exports = mongoose.model('Book', bookSchema);