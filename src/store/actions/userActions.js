import axios from "axios";
import {
  AUTH_START,
  AUTH_SUCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SIDEBAR_OPEN,
  SHOW_NAV,
  HIDE_NAV
} from "./type";

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSucess = (token, userId) => {
  return {
    type: AUTH_SUCESS,
    token: token,
    userId: userId,
  };
};

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    error: error
  };
};

export const authLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("username");
  localStorage.removeItem("is_admin");
  localStorage.removeItem("userId");
  return {
    type: AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationDate => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationDate * 1000);
  };
};

export const authLogin = payload => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("http://localhost:3010/api/v1/auth/login", {
        username: payload.email,
        password: payload.password
      })
      .then(res => {
        const token = res.data.token.value;
        const userId = res.data.id;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSucess(token, userId));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const authSignup = payload => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("http://localhost:3010/api/v1/auth/register", {
        username: payload.username,
        email: payload.email,
        password: payload.password,
        passwordConfirmation: payload.passwordConfirmation
      })
      .then(res => {
        const token = res.data.token;
        const userId = res.data.id;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSucess(token, userId));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const authCheckSate = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const is_admin = localStorage.getItem("is_admin");
    const userId = localStorage.getItem("userId")
    if (token === undefined) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        dispatch(authSucess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

export const openSideBar = () => {
  return {
    type: SIDEBAR_OPEN
  };
};

export const showNav = () => {
  return {
    type: SHOW_NAV
  };
};

export const hideNav = () => {
  return {
    type: HIDE_NAV
  };
};
