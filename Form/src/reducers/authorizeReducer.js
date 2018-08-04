import * as actionType from '../actions/actionType';

export default (state= {}, action) => {
    switch (action.type) {
        case actionType.AUTHORIZE:
            const loginUser = action.user;
            console.log(loginUser);
            return  Object.assign({},state,loginUser);
        default: return state;
    }
}
