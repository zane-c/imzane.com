import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './core/Header.jsx';
import Toaster from './core/Toaster.jsx';
import styles from './app.scss';

const App = ({ children, notifications }) => (
  <div className={styles.app}>
    <div className={styles.body}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
    </div>
    <Toaster notifications={notifications} />
  </div>
);

App.defaultProps = {
  children: null,
};

App.propTypes = {
  children: PropTypes.node,
  notifications: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  notifications: state.notifications,
});

export default connect(mapStateToProps)(App);
