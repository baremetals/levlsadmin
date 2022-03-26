import Cookies from 'js-cookie';
import actions from './actions';

const { BEGIN, SUCCESS, ERR } = actions;

const initState = {
  login: Cookies.get('logedIn'),
  loading: false,
  error: null,
};

/**
 *
 * @todo impure state mutation/explaination
 */
const AuthReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        ...state,
        login: data,
        loading: false,
      };
    case ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};
export default AuthReducer;
