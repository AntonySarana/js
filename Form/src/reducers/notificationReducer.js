// import all types of Actions
import * as ActionTypes from '../actions/actionType';

export default (state =[],action) => {
    switch (action.type){
        case ActionTypes.IS_NOTIFICATION:
            return console.log('notification' + action.id);
        default:
            return state;
    }
        
}