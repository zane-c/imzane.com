import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabViewer.scss';

const TabViewer = ({ options, selected, onSelect }) => {
  const width = `${100 / options.length}%`;
  const marginLeft = `${(100 * options.indexOf(selected)) / options.length}%`;
  return (
    <div className={styles.tabViewer}>
      <div className={styles.optionsContainer}>
        {options.map(option => (
          <div
            key={option}
            className={(selected === option) ? styles.selected : null}
            onClick={() => onSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className={styles.slider} style={{ marginLeft, width }} />
    </div>
  );
};

TabViewer.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TabViewer;
