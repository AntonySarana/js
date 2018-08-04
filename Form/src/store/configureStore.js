import {createStore} from 'redux';
import RootReducer from '../reducers';
import data from '../data.txt';

export default function configureStorea() {
    return createStore(RootReducer);
}

