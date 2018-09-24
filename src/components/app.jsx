import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './src/Header.jsx';
import Toaster from './core/Toaster.jsx';
import styles from './app.scss';

class App extends React.Component {
  componentWillMount() {
    const pacman = '• • • • • • • • • • • • • ᗣ • • • • • • • • • • •';
    let f1;
    (f1 = (index) => {
      document.title = `ᗧ${pacman.slice(index)}`;
      setTimeout(() => {
        document.title = `O${pacman.slice(index + 1)}`;
        setTimeout(() => f1((index + 2) % pacman.length), 300);
      }, 300);
    })(0);
  }

  render() {
    const { children, notifications, pathname } = this.props;
    return (
      <div className={styles.app}>
        <div className={styles.body}>
          <Header />
          <div className={styles.content} key={pathname}>
            {children}
          </div>
        </div>
        <Toaster notifications={notifications} />
      </div>
    );
  }
}

App.defaultProps = {
  children: null,
};

App.propTypes = {
  children: PropTypes.node,
  notifications: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  notifications: state.notifications,
  pathname: state.routing.locationBeforeTransitions.pathname,
});

export default connect(mapStateToProps)(App);
