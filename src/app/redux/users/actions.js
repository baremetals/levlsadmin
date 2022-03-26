const actions = {
  LOADING_USER: 'LOADING_USER',
  LOADING_ALL_USERS: 'LOADING_ALL_USERS',
  SET_USER: 'SET_USER',
  SET_ALL_USERS: 'SET_ALL_USERS',
  SUCCESS: 'SET_SUCCESS',
  SET_ERR: 'SET_ERR',

  getUserBegin: () => {
    return {
      type: actions.SET_BEGIN,
    };
  },

  getUserSuccess: data => {
    return {
      type: actions.SET_SUCCESS,
      data,
    };
  },

  getUserErr: err => {
    return {
      type: actions.SET_ERR,
      err,
    };
  },
};

export default actions;
