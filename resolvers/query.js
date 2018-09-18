const { Book, Author } = require('../models')

module.exports = {
    authors: async ( parent ) => {
        
        let authors = null;
        try {
            authors = await Author.find({});            
        }catch (err) {
            console.log(err);
        }

        return authors;
    },  

    author: ( parent, { id } ) => {
        return null
    },

    books: async () => {
        let books = null;
        try {
            books = await Book.find({});            
        }catch (err) {
            console.log(err);
        }

        return books;
    },

    book: (parent, { id }) => {
        return null;
    },
}