import { 
    GET_GLS, ADD_GL, DELETE_GL, GLS_LOADING
} from '../actions/types';

const initialState = {
    gamesleague: [],
    loading: false
}

export default function (state = initialState, action) {
switch (action.type) {
    case GET_GLS:
        return {
            ...state,
            gamesleague: action.payload,
            loading: false
        }
    case DELETE_GL:
        return {
            ...state,
            gamesleague: state.gamesleague.filter(gamesleague => gamesleague._id !== action.payload)
        }
    case ADD_GL:
        return {
            ...state,
            gamesleague: [action.payload, ...state.gamesleague]
        }
    case GLS_LOADING:
        return {
            ...state,
            loading: true
        }

    default:
        return state;
}
}