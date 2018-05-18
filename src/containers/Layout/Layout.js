import React from 'react';
import classes from './Layout.css';

import Header from '../../components/Header/Header';

export const layout = props => (
      <div>
        <Header />
        <main className={classes.wrapper}>
          {props.children}
        </main>
      </div>
);

export default layout;