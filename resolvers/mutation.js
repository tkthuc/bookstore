
const uuidv4 = require('uuid/v4');

const { Book, Author } = require('../models');

module.exports = {
    // createBook: (parent, { text } ) => {
    //     const id = uuidv4();
     

    //     return null;
    //},

    createAuthor: async (parent , { firstName, lastName, age, description }) => {
        const id = uuidv4();
        let author = null;

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