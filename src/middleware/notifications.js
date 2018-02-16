import * as actions from '../actions/notifications';


const middleware = store => next => (action) => {
  switch (action.type) {
    case actions.ENQUEUE_NOTIFICATION: {
      const { key, duration } = action.notification;
      if (duration !== null) {
        setTimeout(() => {
          store.dispatch(actions.dequeueNotification(key));
        }, duration);
      }
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default middleware;
