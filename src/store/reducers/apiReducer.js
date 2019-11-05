import {
  GET_ANUNCIOS_SUCESS,
  GET_ANUNCIO_SUCESS,
  GET_MESSAGES_SUCESS,
  GET_MESSAGE_SUCESS
} from "../actions/type";
import { updateObject } from "../helper";

const initialState = {
  error: null,
  posts: [],
  post: null,
  messages: [],
  message: null
};

const getAnunciosSucess = (state, action) => {
  return updateObject(state, {
    posts: action.posts
  });
};
const getAnuncioSucess = (state, action) => {
  return updateObject(state, {
    post: action.post
  });
};
const getMessagesSucess = (state, action) => {
  return updateObject(state, {
    messages: action.messages
  });
};
const getMessageSucess = (state, action) => {
  return updateObject(state, {
    message: action.message
  });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANUNCIOS_SUCESS:
      return getAnunciosSucess(state, action);
    case GET_ANUNCIO_SUCESS:
      return getAnuncioSucess(state, action);
    case GET_MESSAGES_SUCESS:
      return getMessagesSucess(state, action);
    case GET_MESSAGE_SUCESS:
      return getMessageSucess(state, action);
  }
};
