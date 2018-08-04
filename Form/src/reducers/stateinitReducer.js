import * as actionType from '../actions/actionType';

export default (state =[],action) => {
    switch (action.type) {
        case (actionType.STATE_INIT):
        return [
            ...state,
            Object.assign({},action.data)
            
        ];
        
        default: return state;
    }
}