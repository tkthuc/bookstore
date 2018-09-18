const { expect } = require('chai');
const proxyquire = require('proxyquire').noCallThru();

describe('Testing GraphQL resolvers', () => {

    let Query;

    let mockAuthors = [{
        firstName: 'john',
        lastName: 'terry',
        age: '40'  
   }];

   let mockBooks = [{
       name: 'My diary',
       description: 'purely crap stuff i do every day'
   }]

    beforeEach(() => {
     

       let stub = {
        '../models': {
                Author: {
                    find: () => Promise.resolve(mockAuthors),
                },           
                Book : {
                    find: () => Promise.resolve(mockBooks),
                }
            }
        };
        Query = proxyquire('./query.js', stub);        
    })

    it('should return all authors', async () => {          
            let authors = await Query.authors();
            expect(authors.length).to.equal(1);
            expect(authors[0].age).to.equal('40');          
           
    });
   

    it('should return all books', async () => {          
            let books = await Query.books();
            expect(books.length).to.equal(1);
            expect(books[0].name).to.equal('My diary');                 
    });
})

