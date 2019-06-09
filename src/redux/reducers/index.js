import {combineReducers} from 'redux';

import numberReducer from './numberReducer';
import contentReducer from './contentReducer';
import displayerReducer from './displayerReducer';


const rootReducer = combineReducers({
    content: contentReducer,
    selector: displayerReducer,
    numbers: numberReducer,
})

export default rootReducer;