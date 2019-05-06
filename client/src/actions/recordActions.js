import axios from 'axios';
import { GET_REC, ADD_REC, DELETE_REC, REC_LOADING } from './types';

export const getRecord = () => dispatch => {
    dispatch(setRecordLoading());
    axios
        .get('/api/record')
        .then(res => 
            dispatch({
                type: GET_REC,
                payload: res.data
            }))
};

export const addRecord = record => (dispatch) => {
    axios
        .post('/api/record', record)
        .then(res => 
            dispatch ({
                type: ADD_REC,
                payload: res.data
            })
        )
};

export const deleteRecord = id => (dispatch) => {
    axios
        .delete(`/api/record/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_REC,
                payload: id
            })
            )
};

export const setRecordLoading = () => {
    return {
        type: REC_LOADING,
    };
};
