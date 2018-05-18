import React from 'react';
import helpers from '../../base/helpers.css';
import classes from './About.css';

export const about = props => (
  <div className={`${helpers.wrapper} ${classes.wrapper}`}>
    <div className={classes.container}>
      <h2>About</h2>
      <p className={classes.paragraph}>History is hard to know, because of all the hired bullshit, but even without being sure of “history” it seems entirely reasonable to think that every now and then the energy of a whole generation comes to a head in a long fine flash, for reasons that nobody really understands at the time—and which never explain, in retrospect, what actually happened.</p>
    </div>
  </div>
);

export default about;