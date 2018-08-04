import * as actionType from './actionType';

export const authorize = (user) => {
    console.log(user)
    return{
        type: actionType.AUTHORIZE,
        user,
    }
}