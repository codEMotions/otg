
import { GET_PROFILE, ADD_PROFILE, PROFILE_LOADING, DELETE_PROFILE } from '../actions/types';

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
        
        case ADD_PROFILE:
            return {
                ...state,
                profile: [action.payload, ...state.profile]
            }
        case DELETE_PROFILE:
        return {
            ...state,
            profile: state.profile.filter(profile => profile._id !== action.payload)
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