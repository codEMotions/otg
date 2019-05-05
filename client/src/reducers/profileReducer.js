
import { GET_PROFILE, UPDATE_PROFILE, PROFILE_LOADING } from '../actions/types';

const initialState = {
    profile: [],
    loadingp: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loadingp: false
            }
        
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: [action.payload, ...state.profile]
            }
        case PROFILE_LOADING:
            return {
                ...state,
                loadingp: true
            }
    
        default:
            return state;
    }
}