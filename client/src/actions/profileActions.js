import axios from 'axios';
import { UPDATE_PROFILE, GET_PROFILE, PROFILE_LOADING } from './types';


export const getProfile = () => dispatch => {
    //dispatch(setProfileLoading());
    axios
        .get('/api/profile')
        .then(res => 
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            }))
};

export const updateProfile = profile => dispatch => {
    axios
        .post('/api/profile', profile)
        .then(res => 
            dispatch ({
                type: UPDATE_PROFILE,
                payload: res.data
            })
        );
};

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};