import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUserRequest} from '../actions';

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    React.useEffect(() => {
        dispatch(fetchUserRequest());
    }, [dispatch]);
    
    return (
        <div>
            {user.loading != null && !user.loading ? user.data.firstName : null}
        </div>
    );
}

export default User;