import * as actions from '../actions/user.js';

const defaults = {
  uid: null,
  user: null,
};

const reducer = (state = defaults, action) => {
  switch (action.type) {
    case actions.SET_USER: {
      return {
        ...state,
        uid: action.uid,
        user: action.user,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
