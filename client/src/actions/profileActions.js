import axios from 'axios';
import { ADD_PROFILE, GET_PROFILE, PROFILE_LOADING, DELETE_PROFILE } from './types';


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

export const addProfile = profile => dispatch => {
    axios
        .post('/api/profile', profile)
        .then(res => 
            dispatch ({
                type: ADD_PROFILE,
                payload: res.data
            })
        );
};

export const deleteProfile = id => (dispatch) => {
    axios
        .delete(`/api/profile/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_PROFILE,
                payload: id
            })
            )
};

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};