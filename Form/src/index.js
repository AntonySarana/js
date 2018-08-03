// React
import React from 'react';
import ReactDOM from 'react-dom';
// style
import './index.css';
// container
import App from './App';

import registerServiceWorker from './registerServiceWorker';
// Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from './reducers';


const store = createStore(RootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
