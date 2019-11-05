import axios from "axios";
import {
  GET_ANUNCIOS_SUCESS,
  GET_ANUNCIO_SUCESS,
  GET_MESSAGES_SUCESS,
  GET_MESSAGE_SUCESS
} from "./type";

export const getAnunciosSucess = posts => {
  return {
    type: GET_ANUNCIOS_SUCESS,
    posts: posts
  };
};

export const getAnuncioSucess = post => {
  return {
    type: GET_ANUNCIO_SUCESS,
    post: post
  };
};

export const getMessagesSucess = messages => {
  return {
    type: GET_MESSAGES_SUCESS,
    messages: messages
  };
};

export const getMessageSucess = message => {
  return {
    type: GET_MESSAGE_SUCESS,
    message: message
  };
};

export const getAnuncios = () => {
  return dispatch => {
    axios
      .get("")
      .then(res => {
        dispatch(getAnunciosSucess(res.data));
      })
      .catch(err => {
        //dispatch(getAnunciosFail(error))
        console.log(error);
      });
  };
};

export const getAnuncio = id => {
  return dispatch => {
    axios
      .get(`${id}`)
      .then(res => {
        dispatch(getAnuncio());
      })
      .catch(error => {
        dispatch(getAnuncios());
      });
  };
};

export const deleteAnuncio = id => {
  return dispatch => {
    axios
      .delete(`${id}`)
      .then(res => {
        dispatch(getAnuncios());
      })
      .catch(error => {
        dispatch(getAnuncios());
      });
  };
};

export const createAnuncio = payload => {
  return dispatch => {
    axios
      .post(`${id}`, payload)
      .then(res => {
        dispatch(getAnuncios());
      })
      .catch(error => {
        dispatch(getAnuncios());
      });
  };
};

export const getMessages = id => {
  return dispatch => {
    axios
      .get(`${id}`)
      .then(res => {
        dispatch(getMessagesSucess(res.data));
      })
      .catch(err => {
        //dispatch(getMessagesFail(error))
        console.log(error);
      });
  };
};

export const getMessage = id => {
  return dispatch => {
    axios
      .get(`${id}`)
      .then(res => {
        dispatch(getMessageSucess());
      })
      .catch(error => {
        dispatch(getMessages());
      });
  };
};

export const deleteMessage = id => {
  return dispatch => {
    axios
      .delete(`${id}`)
      .then(res => {
        dispatch(getMessages());
      })
      .catch(error => {
        dispatch(getMessages());
      });
  };
};

export const createMessage = payload => {
  return dispatch => {
    axios
      .post(`${id}`, payload)
      .then(res => {
        dispatch(getMessages());
      })
      .catch(error => {
        dispatch(getMessages());
      });
  };
};
