import axios from "axios";
import {
  SIGN_IN,
  SIGN_UP,
  GET_ERRORS,
  LOGOUT_USER,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE
} from "./type";

export const signUp = data => {};

export const openSideBar = () => {
  return {
    type: SIDEBAR_OPEN
  };
};
