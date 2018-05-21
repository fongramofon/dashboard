import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import classes from './SurveyForm.css';

import Input from '../../components/Input/Input';
import validate from './SurverFormValidation';

let SurveyForm = props => {
    console.log(props);
    return (
        <form onSubmit={props.handleSubmit}>
            <Field label="Email" name="email" component={Input} type="text" />
            <Field label="Password" name="password" component={Input} type="password" />
            <Field label="Confirm Password" name="confirmPassword" component={Input} type="password" />
            <button type="submit" disabled={props.pristine || props.invalid || props.submitting}>Submit</button>
        </form>
    );
}

SurveyForm = reduxForm({
    form: 'contract',
    validate
})(SurveyForm);

export default SurveyForm;
