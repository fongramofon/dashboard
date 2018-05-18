import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SurveyForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="text"></Field>
            </div>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text"></Field>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

SurveyForm = reduxForm({
    form: 'contract'
})(SurveyForm);

export default SurveyForm;
