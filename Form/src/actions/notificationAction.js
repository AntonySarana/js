import * as actionTypes from './actionType';

export const notificationCall = (id) => {
    return {
        type: actionTypes.NOTIFICATION,
        id: id,
    }
}