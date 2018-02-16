import React from 'react';
import PropTypes from 'prop-types';
import { MoonLoader } from 'halogen';
import styles from './Spinner.scss';

const Spinner = ({ color, size, text }) => (
  <div>
    <div className={styles.container}>
      <MoonLoader color={color} size={size} />
      {text && <div className={styles.text}>{text}</div>}
    </div>
  </div>
);

Spinner.defaultProps = {
  color: '#ccc',
  size: '25px',
  text: null,
};

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Spinner;
