import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import styles from './MainMenu.scss';

const MainMenu = () => (
  <div className={styles.menuBar}>
    <div
      className={styles.menuItem}
      onClick={() => browserHistory.push(`/`)}
    >Home</div>
    <div
      className={styles.menuItem}
      onClick={() => browserHistory.push('/contact')}
    >Contact</div>
    <div
      className={styles.menuItem}
      onClick={() => browserHistory.push('/settings')}
    >Account</div>
    <div
      className={styles.menuItem}
    >Logout</div>
  </div>
);

MainMenu.defaultProps = {
};

MainMenu.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
