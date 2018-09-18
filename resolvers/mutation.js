
const uuidv4 = require('uuid/v4');

const { Book, Author } = require('../models');

module.exports = {
    createBook: async (parent, { name, description, publishedDate } ) => {        
        let book = null;
        try{

            book = new Book();
            book.name = name;
            book.description = description;
            book.publishedDate =  publishedDate;       
            await book.save();

        } catch (err) {
            throw new Error(err);
        }
        return book;         
    },

    createAuthor: async (parent , { firstName, lastName, age, description }) => {
        const id = uuidv4();   
        try{
            author = new Author();
            author.firstName = firstName;
            author.lastName = lastName;
            author.age =  age;
            author.description = description;
            await author.save();
        } catch (err) {
            throw new Error(err);
        }

        return author;        
    }

  
}