import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { setAuthenticated, logOut, getAdminData } from 'app/features/adminSlice';
import store from 'app/redux/store';

const getItem = key => {
  const data = typeof window !== 'undefined' ? localStorage.getItem(key) : '';

  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const setItem = (key, value) => {
  const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
  return localStorage.setItem(key, stringify);
};

const removeItem = key => {
  localStorage.removeItem(key);
};

const token = localStorage.FBIdToken;

const useIsAuth = () => {
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logOut());
      window.location.href = '/';
    } else {
      store.dispatch({ type: setAuthenticated });
      axios.defaults.headers.common['Authorization'] = token;
      store.dispatch(getAdminData());
    }
  }
};

export { getItem, setItem, removeItem, useIsAuth };
