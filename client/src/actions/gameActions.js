import axios from 'axios';
import { GET_GAME, ADD_GAME, DELETE_GAME, UPDATE_GAME, GAMES_LOADING } from './types';

export const getGames = () => dispatch => {
    dispatch(setGamesLoading());
    axios
        .get('/api/games')
        .then(res => 
            dispatch({
                type: GET_GAME,
                payload: res.data
            }))
};

export const addGame = game => dispatch => {
    axios
        .post('/api/games', game)
        .then(res => 
            dispatch ({
                type: ADD_GAME,
                payload: res.data
            })
        );
};

export const updateGame = (id, newData) => dispatch => {
    console.log("from actions ", newData)
    axios
        .put(`/api/games/${id}`, newData)
        .then(res =>
            dispatch({
                type: UPDATE_GAME,
                payload: res.data
            }))
};

export const deleteGame = id => dispatch => {
    axios
        .delete(`/api/games/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_GAME,
                payload: id
            })
        )
};

export const setGamesLoading = () => {
    return {
        type: GAMES_LOADING,
    };
};



