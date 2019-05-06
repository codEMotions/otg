import axios from 'axios';
import { GET_GLS, ADD_GL, DELETE_GL, GLS_LOADING } from './types';

export const getGameleague = () => dispatch => {
    dispatch(setgameLeagueLoading());
    axios
        .get('/api/gamesleague')
        .then(res => 
            dispatch({
                type: GET_GLS,
                payload: res.data
            }))
};

export const addGameleague = league => (dispatch) => {
    axios
        .post('/api/gamesleague', league)
        .then(res => 
            dispatch ({
                type: ADD_GL,
                payload: res.data
            })
        )
};

export const deleteGameleague = id => (dispatch) => {
    axios
        .delete(`/api/gamesleague/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_GL,
                payload: id
            })
            )
};

export const setgameLeagueLoading = () => {
    return {
        type: GLS_LOADING,
    };
};
