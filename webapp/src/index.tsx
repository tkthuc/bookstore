
import * as React  from 'react';
import * as ReactDOM from 'react-dom';

import BookForm  from './components/book_form';

const BooksInfo = [
    {
        fieldName: "Name",
        type: 'text',
    },
    {
        fieldName: "Description ",
        type: 'textarea',
    },
    {
        fieldName: "Publishing Date",
        type: 'date',
    },
    {
        fieldName: "Cover Image",
        type: 'file',
    },
]


ReactDOM.render(
    <BookForm fields={ BooksInfo }/>,
    document.getElementById('container')
)