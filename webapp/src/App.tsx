import * as React from 'react';

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
]

export default class App extends React.Component {
    render() {
        return <BookForm fields={ BooksInfo }/>
    }
}