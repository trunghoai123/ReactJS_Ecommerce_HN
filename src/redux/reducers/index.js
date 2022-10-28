import { combineReducers } from 'redux';
import hobbyReducer from './Hobby';
const rootReducer = combineReducers({
   hobby: hobbyReducer,
});

export default rootReducer;
