import React from 'react';
import PropTypes from 'prop-types';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import styles from './Paginator.scss';

const Paginator = ({ changePage, page, totalPages }) => {
  const pageDown = () => {
    if (page > 1) {
      changePage(page - 1);
    }
  };
  const pageUp = () => {
    if (page < totalPages) {
      changePage(page + 1);
    }
  };
  const setPage = (e) => {
    e.preventDefault();
    const el = document.getElementById('page_number');
    const val = parseInt(el.value, 10);
    if (val <= totalPages && val >= 1) {
      el.value = null;
      changePage(val);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.arrowL} onClick={pageDown}>
        <FaAngleLeft />
      </div>
      <form className={styles.pageSelect} onSubmit={setPage}>
        <input
          key={page}
          id={'page_number'}
          autoComplete={'off'}
          className={styles.current}
          placeholder={page}
        />
        <div className={styles.total}>{` / ${totalPages}`}</div>
      </form>
      <div className={styles.arrowR} onClick={pageUp}>
        <FaAngleRight />
      </div>
    </div>
  );
};

Paginator.propTypes = {
  changePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Paginator;
