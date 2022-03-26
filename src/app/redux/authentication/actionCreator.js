import Cookies from 'js-cookie';
import actions from './actions';
import axios from 'axios';
import { API } from '../../../config/api'

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = (userData) => {
  return async dispatch => {
    try {
      dispatch(loginBegin());
      axios
      .post(API.auth.login, userData)
      .then((res) => {
        setAuthorizationHeader(res.data.token);
        console.log(res);
        setTimeout(() => {
          Cookies.set('logedIn', true);
          return dispatch(loginSuccess(true));
        }, 1000);
      })
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      localStorage.removeItem('FBIdToken');
      delete axios.defaults.headers.common['Authorization'];
      Cookies.remove('logedIn');
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

const getUserData = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      const res = axios.get(API.user.user)
      console.log(res)
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export { login, logOut };
