import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from './core/Sidebar.jsx';
import TorusKnot from './src/TorusKnot.jsx';
import Toaster from './core/Toaster.jsx';
import styles from './app.scss';

const App = ({ children, notifications, theme }) => (
  <div className={styles.app + ' ' + (theme === 'light' ? styles.light : styles.dark)}>
    <div className={styles.grower} />
    <Sidebar />
    {children}
    <TorusKnot />
    <Toaster notifications={notifications} />
  </div>
);

App.defaultProps = {
  children: null,
};

App.propTypes = {
  children: PropTypes.node,
  notifications: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  notifications: state.notifications,
  theme: state.app.theme,
});

export default connect(mapStateToProps)(App);
