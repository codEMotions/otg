
import { 
    GET_LEAGUES, ADD_LEAGUE, DELETE_LEAGUE, LEAGUES_LOADING, ITEMS_LOADING
} from '../actions/types';

const initialState = {
leagues: [],
loading: false
}

export default function (state = initialState, action) {
switch (action.type) {
    case GET_LEAGUES:
        return {
            ...state,
            leagues: action.payload,
            loading: false
        }
    case DELETE_LEAGUE:
        return {
            ...state,
            leagues: state.leagues.filter(league => league._id !== action.payload)
        }
    case ADD_LEAGUE:
        return {
            ...state,
            leagues: [action.payload, ...state.leagues]
        }
    case LEAGUES_LOADING:
        return {
            ...state,
            loading: true
        }

    default:
        return state;
}
}