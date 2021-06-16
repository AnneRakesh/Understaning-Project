import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer_1 } from './Reducers/Reducers';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({reducer_1, form: formReducer})


//const rootReducer = combineReducers(reducer_1);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
