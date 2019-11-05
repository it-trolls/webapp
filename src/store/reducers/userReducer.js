import {
  AUTH_START,
  AUTH_SUCESS,
  AUTH_FAIL,
  AUTH_LOGOUT
} from "../actions/type";
import { updateObject } from "../helper";

const initialState = {
  token: null,
  error: null,
  loading: false,
  username: null,
  is_admin: null,
  sideBar: false
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
    default:
      return state;
  }
};
