import {call, put, takeEvery} from 'redux-saga/effects';
import {USER_FETCH_REQUEST} from '../actions/types';
import {fetchUserSuccess, fetchUserFailure} from '../actions';
import API from '../api';

function* userSaga() {
    try {
        let user = yield call(API.get, '/users/1', {});
        
        yield put(fetchUserSuccess(user.data));
    } catch(error) {
        yield put(fetchUserFailure(error));
    }
}

export default function* watchUserSaga() {
    yield takeEvery(USER_FETCH_REQUEST, userSaga)
}