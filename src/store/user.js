import axios from 'axios';
const GET_INOF = 'INDEX/GET_INFO';

const changeInfo = data => ({
    type: GET_INOF,
    data
});

export const getUserInfo = server => {
    return (dispatch, getState, axiosInstance) => {
        return axios.get('http://localhost:3001/user/info')
        .then(res => {
            
            const { data } = res.data;
            dispatch(changeInfo(data));
        }).catch(err => {
            
        })
    }
}

const defaultState = {
    userInfo: {}
}

export default ( state = defaultState, action) => {
    switch(action.type) {
        case GET_INOF: 
            const newState = {...state, userInfo: action.data};
            return newState;
        default: 
            return state;
    }
}