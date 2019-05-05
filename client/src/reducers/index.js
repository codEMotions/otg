import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import profileReducer from './profileReducer';
import gameReducer from './gameReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';



export default combineReducers({
    item: itemReducer,
    profile: profileReducer,
    game: gameReducer,
    error: errorReducer,
    auth: authReducer
})