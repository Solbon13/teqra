import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunkMiddleware from 'redux-thunk'
import mainReducer from "./mainReducer";

let rootReducer = combineReducers({
    main: mainReducer
})

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store