import {combineReducers} from 'redux';

import numberReducer from './numberReducer';
import contentReducer from './contentReducer';


const rootReducer = combineReducers({
    content: contentReducer,
    numbers: numberReducer,
})

export default rootReducer;