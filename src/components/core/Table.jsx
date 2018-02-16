import React from 'react';
import PropTypes from 'prop-types';
import JsonTable from 'react-json-table';
import styles from './Table.scss';

const Table = ({ children, data }) => (
  <div className={styles.container}>
    <div className={styles.graph}>
      {children}
      <div className={styles.table}>
        <JsonTable rows={data} />
      </div>
    </div>
  </div>
);

Table.defaultProps = {
  children: null,
};

Table.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array.isRequired,
};

export default Table;
