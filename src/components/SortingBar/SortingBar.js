import React from 'react';
import classes from './SortingBar.css';

export const sortingBar = props => (
  <div className={classes.bar}>
    <label htmlFor="sorting" className={classes.label}>Sorting: </label>
    <select id="sorting" onChange={props.changed}>
      <option>None</option>
      <option>Last Name (asc)</option>
      <option>Last Name (desc)</option>
    </select>
  </div>
);

export default sortingBar;