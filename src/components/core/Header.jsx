import React from 'react';
import { hashHistory } from 'react-router';
import MainMenu from './MainMenu.jsx';
import Logo from '../../assets/logo.png';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img src={Logo} alt="" />
    </div>
    <div
      className={styles.title}
      onClick={() => hashHistory.push('/')}
    >
      Title here
    </div>
    <MainMenu />
  </div>
);

export default Header;
