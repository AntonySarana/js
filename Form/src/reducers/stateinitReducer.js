import * as actionType from '../actions/actionType';

export default (state= [] ,action) => {
    switch (action.type) {
        case (actionType.STATE_INIT):
        const newState = state.concat(action.data);
        return newState;
        default: return state;
    }
}