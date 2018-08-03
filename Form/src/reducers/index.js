// components of Redux
import { combineReducers } from 'redux';

// other Reducers
import isNotification from './notificationReducer';


export default combineReducers({
    isNotification : isNotification,
})