import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer_1 } from "./Reducers/Reducers";

const rootReducer = combineReducers(reducer_1);

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;