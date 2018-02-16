import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Fa from 'react-icons/lib/fa';
import styles from './Toast.scss';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationStyle: null,
    };
  }
  componentWillEnter(callback) {
    this.setState({ animationStyle: styles.showNotification },
      () => setTimeout(callback, 700));
  }
  componentWillLeave(callback) {
    this.setState({ animationStyle: styles.dismissNotification },
      () => setTimeout(callback, 700));
  }
  render() {
    const { onDismiss, notification } = this.props;
    const icon = Fa[notification.icon]({
      className: styles.notificationIcon,
      color: notification.color,
      size: 17,
    });
    return (
      <div className={styles.notificationContainer}>
        <div className={this.state.animationStyle}>
          <div className={styles.notificationBox}>
            <div className={styles.notificationMessage} onClick={notification.Click}>
              <div className={styles.notificationIcon}>{icon}</div>
              {notification.text}
            </div>
            <div
              className={styles.closeButton}
              onClick={() => onDismiss(notification.key)}
            >
              <Fa.FaClose
                size={10}
                color={'#393939'}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Toast.propTypes = {
  notification: PropTypes.object.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Toast;
