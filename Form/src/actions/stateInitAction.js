import * as actionType from './actionType';

export const stateInit = (data) => {
    return {
        type: actionType.STATE_INIT,
        data,
    }
}