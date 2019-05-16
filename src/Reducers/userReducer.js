import { SIGN_IN, SIGN_UP, GET_ERRORS, LOGOUT_USER } from '../Actions/type';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
