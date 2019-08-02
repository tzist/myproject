import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { createStore } from 'redux';
import counterReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));