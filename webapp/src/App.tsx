import * as React from 'react';
import {Route, Switch} from 'react-router';

import AuthorForm from './components/author_form';
import BookForm  from './components/book_form';

const BooksInfo = [
    {
        fieldName: "name",
        label: "Name",
        type: 'text',
    },
    {
        fieldName: "description",
        label: "Description ",
        type: 'textarea',
    },
    {
        fieldName: "publishedDate",
        label: "Publishing Date",
        type: 'date',
    },
    {
        fieldName: "cover",
        label: "Cover Image",
        type: 'file',
    },
];


const AuthorInfo = [
    {
        fieldName: "firstName",
        label: "firstName",
        type: 'text',
    },
    {
        fieldName: "lastName",
        label: "lastName",
        type: 'text',
    },
    {
        fieldName: "description",
        label: "Description ",
        type: 'textarea',
    },
    {
        fieldName: "age",
        label: "Age",
        type: 'date',
    },
    {
        fieldName: "photo",
        label: "Photo",
        type: 'file',
    },
]

export default class App extends React.Component {
    render() {
        return (
            <Switch>                
                <Route path='/createAuthor' render = { (props) => <AuthorForm {...props} fields={AuthorInfo}></AuthorForm>}></Route>
                <Route path='/' render={ (props) => <BookForm {...props} fields={BooksInfo} ></BookForm> }></Route>
            </Switch>
        )
       
    }
}