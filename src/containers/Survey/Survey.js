import React, { Component } from 'react';
import SurveyForm from '../../components/SurveyForm/SurveyForm';

class Survey extends Component {
    submit = values => {
        console.log(values);
    }
    render() {
        return (
            <SurveyForm onSubmit={this.submit} />
        );
    }
}

export default Survey;