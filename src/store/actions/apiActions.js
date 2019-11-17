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

export const getAnuncios = query => {
  const url = query
    ? `http://localhost:3010/api/v1/properties?${query}`
    : "http://localhost:3010/api/v1/properties/";
  return dispatch => {
    axios
      .get(url)
      .then(res => {
        dispatch(getAnunciosSucess(res.data));
      })
      .catch(err => {
        //dispatch(getAnunciosFail(error))
        console.log(err);
      });
  };
};

export const getAnuncio = id => {
  console.log(id)
  return dispatch => {
    axios
      .get(`http://localhost:3010/api/v1/properties/${id}`)
      .then(res => {
        dispatch(getAnuncioSucess(res.data));
      })
      .catch(error => {
        dispatch(getAnunciosSucess(error));
      });
  };
};
export const updateAnuncio = (id, payload, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
  }
  return dispatch => {
    axios
      .put(`http://localhost:3010/api/v1/properties/${id}`,payload,{"headers": headers})
      .then(res => {
        dispatch(getAnuncioSucess(res.data));
      })
      .catch(error => {
        dispatch(getAnunciosSucess(error));
      });
  };
};

export const deleteAnuncio = (id, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
  }
  return dispatch => {
    axios
      .delete(`http://localhost:3010/api/v1/properties/${id}`,{"headers": headers})
      .then(res => {
        dispatch(getAnuncios());
      })
      .catch(error => {
        dispatch(getAnuncios());
      });
  };
};

export const createAnuncio = (payload, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
  }
  return dispatch => {
    axios
      .post(`http://localhost:3010/api/v1/properties/`, payload,  {"headers": headers})
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
        console.log(err);
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

export const createMessage = (message, id, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
  }
  return dispatch => {
    axios
      .post(``, {"message": message, "id": id}, {"headers": headers})
      .then(res => {
        dispatch(getMessages());
      })
      .catch(error => {
        dispatch(getMessages());
      });
  };
};
