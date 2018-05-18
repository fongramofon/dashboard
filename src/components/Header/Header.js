import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Header.css';
import helpers from '../../base/helpers.css';

export const header = props => (
  <header className={classes.header}>
    <div className={`${helpers.wrapper} ${classes.wrapper}`}>
      <Link to="/">
        <div className={classes.logo}></div>
      </Link>
      <NavLink 
        to="/about" 
        className={classes.navLink}
        activeClassName={classes.active}
      >
        About
      </NavLink>
    </div>
  </header>
);

export default header;