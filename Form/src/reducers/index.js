// components of Redux
import { combineReducers } from 'redux';

// other Reducers
import isNotification from './notificationReducer';
import stateInit from './stateinitReducer';

export default combineReducers({
    isNotification : isNotification,
    userData : stateInit,
})