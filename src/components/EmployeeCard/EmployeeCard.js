import React from 'react';
import classes from './EmployeeCard.css';

export const employeeCard = props => (
  <div className={classes.card}>
    <img 
      className={classes.avatar} 
      src={props.avatar} 
      alt={`${props.first_name} ${props.last_name} avatar`} 
    />
    <div className={classes.metaInfoBlock}>
      <h3 className={classes.fullnameTitle}>{`${props.first_name} ${props.last_name}`}</h3>
      <p className={classes.company}>{props.company}</p>  
      <p className={classes.metaInfoSpan}>{props.email}</p>
      <p className={classes.metaInfoSpan}>{props.address}</p>
      <p className={classes.metaInfoSpan}>{props.phone}</p>    
    </div>
  </div>
);

export default employeeCard;