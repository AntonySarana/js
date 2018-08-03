import * as actionTypes from './actionType';

export const notificationCall = (id) => {
    return {
        type: actionTypes.IS_NOTIFICATION,
        id: id,
    }
}