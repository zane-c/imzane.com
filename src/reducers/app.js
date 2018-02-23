import * as actions from '../actions/app.js';

const defaults = {
  theme: 'light',
  url: '',
};

const reducer = (state = defaults, action) => {
  switch (action.type) {
    case actions.GOTO: {
      return {
        ...state,
        url: action.url,
      };
    }
    case actions.SET_STATE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
