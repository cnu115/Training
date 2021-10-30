import Types from "./reduxTypes";
const defaultState = {
    counter:0,
    isLogin: false,
}
const reducer = (state = defaultState, action) => {
    console.log('state ', state)
    console.log('state ', action)
    // if(action.type === Types.ADDITION){
    //     return {
    //         ...state,
    //         counter: state.counter+1
    //     }
    // }else if(action.type === Types.SUBTRACTION){
    //
    // }
    switch (action.type) {
        case Types.ADDITION:{
            console.log('ADDITION')
            return {
                ...state,
                counter: state.counter+1
            }
        }
        case Types.SUBTRACTION:{
            console.log('SUBTRACTION')
            return {
                ...state,
                counter: state.counter !== 0 ? state.counter-1 : 0
            }
        }
        case Types.AUTHENTICATION: {
            const token = sessionStorage.getItem('token');
            console.log('token value ', token)
            return {
                ...state,
                isLogin: token ? true : false
            }
        }
        default: return state
    }
}

export default reducer;