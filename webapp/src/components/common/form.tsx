import * as React from 'react';

import './form.scss';

export interface IFormProps {
    fields: IField[],
    headline: String,
    onSubmit?: () => any,
    onUploadFile?: () => any
}

interface IField {
    fieldName : string,
    type: string,
    label: string
}

export class Form extends React.Component<IFormProps, any> {
    constructor(props) {
        super(props);
        this.state = {}
    }


    updateState( fieldName: string, value: string) : void {
        this.setState({
            [fieldName]: value
        })
    }


    getInputType(field : IField) : JSX.Element{
        if(field.type == 'textarea') {
            return <textarea value={ this.state[field.fieldName]} onChange={ (event) => this.updateState(field.fieldName, event.target.value )}/>
        }
        if(field.type == 'file') {
            return <input type='file'/>
        }
        return <input type= { field.type } value={ this.state[field.fieldName]} onChange={ (event) => this.updateState(field.fieldName, event.target.value )} />;
    }

    render() {
        return (
            <form className='form' onSubmit={this.props.onSubmit}>
                <div className='form-headline'>
                    {this.props.headline}
                </div>
                {
                    this.props.fields.map( field =>
                        <div className='form-field' key={field.fieldName}>
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