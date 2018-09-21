import * as React from 'react';

import  './book_form.scss';

interface BookInfo {
    fieldName : string,
    type: string,
}

export default class BookForm extends React.Component <any, any> {
    constructor( props : { fields : BookInfo[] } ) {
        super(props);

        this.state = {};
    }


    getInputType(field : BookInfo) : JSX.Element{
        if(field.type == 'textarea') {
            return <textarea value={ this.state[field.fieldName]}/>
        }
        return <input type= { field.type } value={ this.state[field.fieldName]}/>;
    }

    render() {
        return (
            <form className='book-form'>
                <div className='book-form-headline'>
                    Book Information
                </div>
                {
                    this.props.fields.map( field =>
                        <div className='book-form-field'>
                            <label> { field.fieldName} </label>
                            {
                                this.getInputType(field)
                            }
                        </div>
                    )
                }
                <button type='submit' role='button'>
                        Submit
                </button>
            </form>
        )
    }
}


