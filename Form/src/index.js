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
import configureStore from './store/configureStore';


const store = configureStore();

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
