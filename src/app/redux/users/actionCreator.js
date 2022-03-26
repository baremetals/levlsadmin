import actions from './actions';

const { readNotificationBegin, readNotificationSuccess, readNotificationErr } = actions;

const initialState = {
  loading: false,
  users: [],
  userData: {},
};

const readNotificationList = () => {
  return async dispatch => {
    try {
      dispatch(readNotificationBegin());
      dispatch(readNotificationSuccess(initialState));
    } catch (err) {
      dispatch(readNotificationErr(err));
    }
  };
};
