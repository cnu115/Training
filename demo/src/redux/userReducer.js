import Types from "./reduxTypes";
const defaultState = {
    userInfo: []
}
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Types.USERS:{
            return {
                ...state,
                userInfo: []
            }
        }
        default: return state
    }
}

export default userReducer;