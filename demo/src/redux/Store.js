//redux centeral state store
//reducer
//actions
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import reducer from "./reducer";
// import userReducer from "./userReducer";

// counter:0,
//     isLogin: false

// main.counter

const multipleReduces = combineReducers({
    main: reducer,
})

const configureStore = (initialState) =>{
    return createStore(reducer, initialState, applyMiddleware(logger,thunk));
}

export default configureStore;