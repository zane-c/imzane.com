import * as actions from '../actions/notifications';

const defaults = [];

const reducer = (state = defaults, action) => {
  switch (action.type) {
    case actions.ENQUEUE_NOTIFICATION: {
      return [...state, action.notification];
    }
    case actions.DEQUEUE_NOTIFICATION: {
      return state.filter(notification => notification.key !== action.key);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
