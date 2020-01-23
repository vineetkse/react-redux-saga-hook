import {USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAILURE} from './types';

const fetchUserRequest = () => ({
    type: USER_FETCH_REQUEST
});


const fetchUserSuccess = (user) => ({
    type: USER_FETCH_SUCCESS,
    user
});

const fetchUserFailure = (errorMsg) => ({
    type: USER_FETCH_FAILURE,
    errorMsg
});

export {fetchUserRequest, fetchUserSuccess, fetchUserFailure};