import streams from '../api/streams';
import history from '../history';
import db from '../api/firebase';
import {
  SIGN_IN,
  SIGN_OUT,
  GET_AUTH_USER,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_SINGLE_STREAM,
  EDIT_STREAM,
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const getAuthUser = user => async dispatch => {
  dispatch({ type: GET_AUTH_USER, payload: user });
};

export const createStream = formValues => async (dispatch, getState) => {
  const { user } = getState().auth;
  const response = await streams.post('/streams', {
    ...formValues,
    userId: user.userId,
    user,
  });
  db.collection('streams').add({
    description: response.data.description,
    id: response.data.id,
    titles: response.data.title,
  });

  alert(
    'Thank you, your  stream has been created! Your stream key is ' +
      response.data.id +
      ', to be used in OBS.'
  );
  history.push('/streams');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchSingleStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_SINGLE_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/streams');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: EDIT_STREAM, payload: id });
};
