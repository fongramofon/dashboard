import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import employeeListReducer from './store/reducers/employeeListReducer';
import { reducer as formReducer } from 'redux-form';
import dashboardReducer from './store/reducers/dashboardReducer';
import createSagaMiddleware from 'redux-saga';
import { watchGetDashboardData } from './store/sagas';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    form: formReducer
})

const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchGetDashboardData);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
