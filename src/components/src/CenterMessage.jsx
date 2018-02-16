import React from 'react';
import PropTypes from 'prop-types';
import styles from './CenterMessage.scss';

const Center = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

Center.defaultProps = {
  children: null,
};

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
};

export default Center;
