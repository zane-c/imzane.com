import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTransitionGroup from 'react-addons-transition-group';
import { dequeueNotification } from '../../actions/notifications';
import Toast from './Toast.jsx';
import styles from './Toaster.scss';


const Toaster = ({ notifications, onDismiss }) => (
  <div className={styles.notificationContainer}>
    <ReactTransitionGroup>
      {notifications.map(notification => (
        <Toast
          key={notification.key}
          notification={notification}
          onDismiss={onDismiss}
        />
      ))}
    </ReactTransitionGroup>
  </div>
);

Toaster.propTypes = {
  notifications: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onDismiss: dequeueNotification }, dispatch);
}

export default connect(null, mapDispatchToProps)(Toaster);
