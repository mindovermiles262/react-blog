import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './actions/serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import PostsIndex from './components/posts-index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>  
  , document.getElementById('root'));

serviceWorker.unregister();
