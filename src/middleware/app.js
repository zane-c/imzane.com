import { browserHistory } from 'react-router';
import * as api from '../actions/app.js';

const middleware = () => next => (action) => {
  switch (action.type) {
    case api.GOTO: {
      browserHistory.push(action.url);
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default middleware;
