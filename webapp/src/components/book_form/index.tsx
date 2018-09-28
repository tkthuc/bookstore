import * as React from 'react';

import { graphql } from 'react-apollo';

import { addBookMutation } from '../../queries/book_queries';

import  './book_form.scss';

interface IBookProps {
    fields: BookField[],
    addBookMutation?: ( { variables : any}) => Promise<any>
}

interface BookField {
    fieldName : string,
    type: string,
    label: string
}

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget
}

class BookForm extends React.Component <IBookProps, any> {
    
    constructor( props : IBookProps ) {
        super(props);
        this.state = {};
    }

    async handleSubmit(event: Event) {
        event.preventDefault();
        try {
            let variables = this.props.fields.reduce( (acc,field) => {
                                    if(this.state[field.fieldName]) {
                                        return { ...acc, [field.fieldName]: this.state[field.fieldName] }
                                    } 
                                    return acc;
                            }, {})
            await this.props.addBookMutation({
                variables
            });
        } catch(err) {

        }

    }

    updateState( fieldName: string, value: string) : void {
        this.setState({
            [fieldName]: value
        })
    }


    uploadFile(field: BookField, event : HTMLInputEvent) :void{
        console.log(event.target.files[0].name);
    }

    getInputType(field : BookField) : JSX.Element{
        if(field.type == 'textarea') {
            return <textarea value={ this.state[field.fieldName]} onChange={ (event) => this.updateState(field.fieldName, event.target.value )}/>
        }
        if(field.type == 'file') {
            return <input type='file' onChange = { this.uploadFile.bind(this, [field]) }  />
        }
        return <input type= { field.type } value={ this.state[field.fieldName]} onChange={ (event) => this.updateState(field.fieldName, event.target.value )} />;
    }

    render() {
        return (
            <form className='book-form' onSubmit={this.handleSubmit.bind(this)}>
                <div className='book-form-headline'>
                    Book Information
                </div>
                {
                    this.props.fields.map( field =>
                        <div className='book-form-field' key={field.fieldName}>
                            <label> { field.label} </label>
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


export default graphql<IBookProps,any,any>(addBookMutation, { name: 'addBookMutation' })(BookForm);