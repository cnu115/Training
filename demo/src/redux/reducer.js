import Types from "./reduxTypes";

const reducer = (state, action) => {
    console.log('state ', state)
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
                ...state
            }
        }
        default: return state
    }
}

export default reducer;