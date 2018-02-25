import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { goto as gotopage } from 'src/actions/app.js';
import Logo from 'res/zlogo.png';
import Menu from '../src/MenuWeb.jsx';
import styles from './Header.scss';

const Header = ({ url, goto }) => (
  <div className={styles.header}>
    <div className={styles.logo}>
      <img src={Logo} alt="" />
    </div>
    <div className={styles.title} onClick={() => browserHistory.push('/')}>
      ImZANE.com
    </div>
    <Menu />
  </div>
);

Header.propTypes = {
  url: PropTypes.string.isRequired,
  goto: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  url: state.app.url,
});

const mapDispatchToProps = dispatch => ({
  goto: url => dispatch(gotopage(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);