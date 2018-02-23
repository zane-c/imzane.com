import React from 'react';
import { browserHistory } from 'react-router';
import as1 from 'res/as5.png';
import as5 from 'res/as1.png';
import as4 from 'res/as4.png';
import as2 from 'res/as2.png';
import as6 from 'res/as-thumb.png';
import styles from './styles.scss';

const AuthServ = () => (
  <div className={styles.container}>
    <div className={styles.link} onClick={() => browserHistory.push('/projects')}>
      Return to projects
    </div>
    <h3>https://Authenticated-Services.com</h3>
    <p>
      Authenticated services is a data tools platform for deriving intelligence
      from thousands of sales transactions. The system contains several tools
      for brand comparison, brand sales over time, size comparison, and purchasing
      by gender. These tools were designed specifically for clients in the european
      automobile industry.
    </p>
    <h3>Frameworks Used</h3>
    <p>
      The frontend of the system was built in React Javascript using redux. React
      is a great choice for this type of platform because of the quick load times between
      tools and pages. Redux allows for elogent handling of a complex state across
      multiple tools. NodeJS was used for a backend API server paired with a MySQL
      database. Google Firebase was used for user authentication and for the generation
      of auth tokens to authenticate the backend server.
    </p>
    <img src={as1} alt="" />
    <img src={as2} alt="" />
    <img src={as4} alt="" />
    <img src={as5} alt="" />
    <img src={as6} alt="" />
    <br />
    <br />
    <div className={styles.link} onClick={() => browserHistory.push('/projects')}>
      Return to projects
    </div>
    <br />
    <br />
    <br />
  </div>
);

export default AuthServ;
