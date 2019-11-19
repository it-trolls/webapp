import {
  AUTH_START,
  AUTH_SUCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SHOW_NAV,
  HIDE_NAV
} from "../actions/type";
import { updateObject } from "../helper";

const initialState = {
  token: null,
  error: null,
  userId: null,
  loading: false,
  username: null,
  is_admin: null,
  sideBar: false,
  showingNav: false
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSucess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    is_admim: action.is_admin,
    username: action.username,
    userId: action.userId,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
};

const showNav = (state, action) => {
  return updateObject(state, {
    showingNav: true
  });
};
const hideNav = (state, action) => {
  return updateObject(state, {
    showingNav: false
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCESS:
      return authSucess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    case SHOW_NAV:
      return showNav(state, action);
    case HIDE_NAV:
      return hideNav(state, action);
    default:
      return state;
  }
};
