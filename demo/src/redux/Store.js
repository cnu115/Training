//redux centeral state store
//reducer
//actions
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import logger from "redux-logger";
import reducer from "./reducer";
// import userReducer from "./userReducer";

const configureStore = (initialState) =>{
    return createStore(reducer, initialState, applyMiddleware(logger, thunk));
}

export default configureStore;