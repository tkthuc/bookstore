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

    books: () => {
        return null;
    },

    book: (parent, { id }) => {
        return null;
    },
}