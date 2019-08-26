import axios from 'axios';
import { SIGN_IN, SIGN_UP, GET_ERRORS, LOGOUT_USER } from './type';
import { AUTH_SERVER } from '../../components/utils/misc';

export const signUp = data => {
  return async dispatch => {
    try {
      const res = await axios.post(`${AUTH_SERVER}/signup`, data);

      dispatch({
        type: SIGN_UP,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.error
      });
    }
  };
};
