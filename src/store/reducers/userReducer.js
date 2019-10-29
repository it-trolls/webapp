import {
  SIGN_IN,
  SIGN_UP,
  GET_ERRORS,
  LOGOUT_USER,
  SIDEBAR_OPEN
} from "../actions/type";

const initialState = {
  isAuthenticated: false,
  sideBar: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, user: action.payload };
    case SIDEBAR_OPEN:
      return { ...state, sideBar: !state.sideBar };
    default:
      return state;
  }
};
