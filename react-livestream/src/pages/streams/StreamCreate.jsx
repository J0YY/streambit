/* eslint-disable react/prop-types */
import React from 'react';
import AppWraper from '../../components/AppWraper';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from '../../components/stream/StreamForm';
import Nav from "../../Home/Hero/nav";
import "./StreamCreate.css";

const StreamCreate = props => {
  const dispatch = useDispatch();

  const onFormSubmit = formValues => {
    dispatch(createStream(formValues));
  };

  return (
    <div className="st">
      <AppWraper>
        <Nav />
        <Container style={{ marginTop: 50 }}>
          <StreamForm onSubmit={onFormSubmit} />
        </Container>
      </AppWraper>
    </div>
  );
};

export default StreamCreate;
