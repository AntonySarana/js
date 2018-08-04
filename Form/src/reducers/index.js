// components of Redux
import { combineReducers } from 'redux';

// other Reducers
import Notification from './notificationReducer';
import stateInit from './stateinitReducer';
import login from './authorizeReducer';

export default combineReducers({
    Notification : Notification,
    userData : stateInit,
    login : login,
})