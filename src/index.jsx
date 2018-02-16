import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './components/app.jsx';
import EmptySpace from './components/src/EmptySpace.jsx';
import Projects from './components/src/Projects.jsx';
import P404 from './components/core/P404.jsx';
import P403 from './components/core/P403.jsx';

import colorsMiddleware from './middleware/colors.js';
import colorsReducer from './reducers/colors.js';
import appReducer from './reducers/app.js';
import notificationsMiddleware from './middleware/notifications.js';
import notificationsReducer from './reducers/notifications.js';
import userReducer from './reducers/user.js';

const rootMiddleware = [
  colorsMiddleware,
  notificationsMiddleware,
];

const rootReducer = combineReducers({
  app: appReducer,
  colors: colorsReducer,
  notifications: notificationsReducer,
  routing: routerReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    ...rootMiddleware,
  ),
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={EmptySpace} />
        <Route path="/projects" component={Projects} />
        <Route path="*" exact component={P404} />
        <Route path="/403" exact component={P403} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'),
);
