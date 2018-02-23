import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import styles from './MenuWeb.scss';

const MenuWeb = ({ url }) => (
  <div className={styles.menu}>
    <div
      data-selected={url === '/'}
      className={styles.item}
      onClick={() => browserHistory.push('/')}
    >
      Home
    </div>
    <div
      data-selected={url.includes('projects')}
      className={styles.item}
      onClick={() => browserHistory.push('/projects')}
    >
      Projects
    </div>
    <div
      data-selected={url.includes('resume')}
      className={styles.item}
      onClick={() => browserHistory.push('/resume')}
    >
      Resume
    </div>
  </div>
);

MenuWeb.propTypes = {
  url: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const route = state.routing.locationBeforeTransitions;
  return {
    url: route.pathname,
  };
};

export default connect(mapStateToProps)(MenuWeb);
