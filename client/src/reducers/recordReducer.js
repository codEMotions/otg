import { 
    GET_REC, ADD_REC, DELETE_REC, REC_LOADING
} from '../actions/types';

const initialState = {
    record: [],
    loading: false
}

export default function (state = initialState, action) {
switch (action.type) {
    case GET_REC:
        return {
            ...state,
            record: action.payload,
            loading: false
        }
    case DELETE_REC:
        return {
            ...state,
            record: state.record.filter(record => record._id !== action.payload)
        }
    case ADD_REC:
        return {
            ...state,
            record: [action.payload, ...state.record]
        }
    case REC_LOADING:
        return {
            ...state,
            loading: true
        }

    default:
        return state;
}
}