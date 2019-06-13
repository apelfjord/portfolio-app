import {combineReducers} from 'redux';

import numberReducer from './numberReducer';
import contentReducer from './contentReducer';
import displayerReducer from './displayerReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    content: contentReducer,
    selector: displayerReducer,
    numbers: numberReducer,
    authenticated: authReducer,
})

export default rootReducer;