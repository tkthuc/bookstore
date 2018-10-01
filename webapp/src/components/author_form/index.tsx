import * as React from 'react';

import { Form, IFormProps } from '@/components/common';


export default class AuthorForm extends React.Component<IFormProps> {
    constructor(props) {
        super(props);
    }
    render() {
        return <Form fields={ this.props.fields } headline= " Author Information "></Form>
    }
}