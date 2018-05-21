import React, { Component } from 'react';
import classes from './Survey.css';
import helpers from '../../base/helpers.css';
import SurveyForm from '../../components/SurveyForm/SurveyForm';

class Survey extends Component {
    submit = values => {
      console.log(values);
    }

    validateNotEmpty = value => {
      let error = null;
      if (!value) {
        error = 'This is too short'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'This is not email'
      }
      return error;
    }

    render() {
      return (
          <div className={`${helpers.wrapper} ${classes.wrapper}`}>
              <SurveyForm onSubmit={this.submit} validation={this.validateNotEmpty}/>            
          </div>

      );
    }
}

export default Survey;