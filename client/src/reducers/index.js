import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import profileReducer from './profileReducer';
import gameReducer from './gameReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import leagueReducer from './leagueReducer'
import gameleagueReducer from './gameleagueReducer';
import recordReducer from './recordReducer';


export default combineReducers({
    item: itemReducer,
    profile: profileReducer,
    game: gameReducer,
    error: errorReducer,
    auth: authReducer,
    league: leagueReducer,
    gamesleague: gameleagueReducer,
    record: recordReducer
})