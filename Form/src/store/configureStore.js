import {createStore} from 'redux';
import RootReducer from '../reducers';

export default function configureStorea() {
    return createStore(RootReducer);
}