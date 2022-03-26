const actions = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERR: 'LOGIN_ERR',
  LOG_OUT_USER_START: 'LOG_OUT_USER_START',
  LOG_OUT_USER_SUCCESS: 'LOG_OUT_USER_SUCCESS',
  LOGOUT_ERR: 'LOGOUT_ERR',

  loginStart: userCredentials => {
    return {
      type: actions.LOGIN_START,
      payload: userCredentials,
    };
  },

  loginSuccess: data => {
    return {
      type: actions.LOGIN_SUCCESS,
      data,
    };
  },

  loginErr: err => {
    return {
      type: actions.LOGIN_ERR,
      err,
    };
  },

  logoutBegin: () => {
    return {
      type: actions.LOG_OUT_USER_START,
    };
  },

  logoutSuccess: data => {
    return {
      type: actions.LOG_OUT_USER_SUCCESS,
      data,
    };
  },

  logoutErr: err => {
    return {
      type: actions.LOGOUT_ERR,
      err,
    };
  },
};

export default actions;
