import React, { useEffect, useState } from 'react';
import AppWraper from '../../components/AppWraper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreams, deleteStream } from '../../actions';
import Nav from "../../Home/Hero/nav";
import { Fade, Slide, Zoom } from "react-reveal";
import "./StreamList.css";
import ffmpeg from "ffmpeg";
import streams from '../../api/streams';


import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Avatar,
  CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const StreamList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.streams);
  const authUserId = useSelector(state => state.auth.userId);
  const isAuth = useSelector(state => state.auth.isSignedIn);
  const streams = Object.values(state);

  const onItemDelete = streamId => {
    dispatch(deleteStream(streamId));
  };

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  console.log(streams);

  const renderAuthUser = stream => {
    if (stream.userId === authUserId) {
      return (
        <React.Fragment>
          <Link
            to={`/stream/edit/${stream.id}`}
            style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'rgb(5, 31, 66)',
                color: '#fff',
                marginRight: 10,
              }}>
              Edit
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onItemDelete(stream.id)}>
            Delete
          </Button>
        </React.Fragment>
      );
    }
  };

  const renderStreams = () => {
    return streams.map(stream => {

      return (
        <Grid
          item
          xs={6}
          sm={6}
          key={stream.id}
          style={{ marginBottom: 20, position: 'relative' }}>
          <Paper
            style={{
              padding: 10,
              height: '100%',
            }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {/* <Avatar src={stream.user.avatar_url} /> */}
              <Typography
                variant="h6"
                style={{
                  paddingLeft: 10,
                }}>
                {/* {stream.user.username}{' '} */}
              </Typography>
            </div>
            <CardContent>
              <Fade bottom duration={1000}>
                <RenderThumbnail streamID={stream.id} />
                <Typography variant="h6">{stream.title}</Typography>
                <Typography component="p">{stream.description}</Typography>
                <div style={{ position: 'absolute', bottom: 5 }}>
                  <Link
                    to={`/stream/watch/${stream.id}`}
                    style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: 'rgb(5, 31, 66)',
                        color: '#fff',
                        marginRight: 10,
                      }}>
                      Watch Stream
                  </Button>
                  </Link>
                  {renderAuthUser(stream)}
                </div>
              </Fade>
            </CardContent>
          </Paper>
        </Grid>
      );

      })

  };
  const renderButton = () => {
    {
      return (
        <div style={{ textAlign: 'right' }} >
          <Link
            to="/stream/new"
            style={{
              textDecoration: 'none',
            }}>
            <Button
              variant="contained"
              style={{ backgroundColor: 'rgb(5, 31, 66)', color: '#fff' }}>
              Create Stream
            </Button>
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="sl">
      <AppWraper>
        <Nav />
        <Container style={{ marginTop: 70 }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ marginBottom: 10 }}>
            <Fade left duration={1500}>
              <div className="font">
                <h1>Top Streams, Live</h1>
              </div>
            </Fade>
            {renderButton()}
          </Grid>
          <Grid container spacing={3} direction="row" alignItems="stretch">
            {renderStreams()}
          </Grid>
        </Container>
      </AppWraper>
    </div >
  );
};

function RenderThumbnail({streamID}) {
    let [thumbnail, setThumbnail] = useState(null);
    useEffect( () => {
      streams.get("/screenshot", {
        params: {
          streamID
        }
      }).then(res => {
        console.log(res);
        let url = res.data;
        return setThumbnail(url)
      }).catch(err => console.log(err))
    }, [])
  
  
  return (
    (thumbnail != null) && <img src={`${thumbnail}`} />
    )
  }


export default StreamList;
