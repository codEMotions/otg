import axios from 'axios';
import { GET_LEAGUES, ADD_LEAGUE, DELETE_LEAGUE, LEAGUES_LOADING } from './types';

export const getLeagues = () => dispatch => {
    dispatch(setLeaguesLoading());
    axios
        .get('/api/leagues')
        .then(res => 
            dispatch({
                type: GET_LEAGUES,
                payload: res.data
            }))
};

export const addLeague = league => (dispatch) => {
    axios
        .post('/api/leagues', league)
        .then(res => 
            dispatch ({
                type: ADD_LEAGUE,
                payload: res.data
            })
        )
};

export const deleteLeague = id => (dispatch) => {
    axios
        .delete(`/api/leagues/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_LEAGUE,
                payload: id
            })
            )
};

export const setLeaguesLoading = () => {
    return {
        type: LEAGUES_LOADING,
    };
};
