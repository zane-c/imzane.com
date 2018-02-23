import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import styles from './Link.scss';

const Link = ({ children, href, onClick }) => (
  <div
    onClick={() => {
      onClick();
      if (href) {
        browserHistory.push(href);
      }
    }}
    className={styles.text}
  >
    {children}
  </div>
);

Link.defaultProps = {
  onClick: () => null,
  href: null,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default Link;
