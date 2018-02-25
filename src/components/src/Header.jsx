import React from 'react';
import { browserHistory } from 'react-router';
import Logo from 'res/favi.png';
import Menu from '../src/MenuWeb.jsx';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      <img src={Logo} alt="" />
    </div>
    <div className={styles.title} onClick={() => browserHistory.push('/')}>
      imZane.com
    </div>
    <Menu />
  </div>
);

export default Header;
