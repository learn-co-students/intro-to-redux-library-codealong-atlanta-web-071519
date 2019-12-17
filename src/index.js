// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'; /* code change */

// to avoid passing 'store' as a prop ... use the Provider component 
// Provider component wraps App and is the only component where 'store' is passed in
// allows us to access our Redux 'store' and/or dispatch actions from any component we want
import { Provider } from 'react-redux'; 

import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(
    shoppingListItemReducer, 
    // the below two are for connecting app to Redux devtools in Chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
); /* code change */

// ReactDOM.render(<App store={store} />, document.getElementById('root')); 
// or the one below ...

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

