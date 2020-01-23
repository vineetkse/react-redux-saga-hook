const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_FETCH_REQUEST':
          return {loading: true, error: false};
        case 'USER_FETCH_SUCCESS':
          return {loading: false, error: false, data: {...action.user}};
        case 'USER_FETCH_FAILURE':
          return {loading: false, error: true, errorMsg : {...action.errorMsg}};
        default:
          return state;
      }
};

export default userReducer;