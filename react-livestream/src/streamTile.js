import React, { forwardRef } from 'react';
import { Fade } from 'react-reveal';
import './pages/streams/StreamList.css';
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const StreamTile = forwardRef(({ title, description, id }, ref) => {
  return (
    <Grid
      item
      xs={6}
      sm={6}
      key={id}
      style={{ marginBottom: 20, position: 'relative' }}>
      <Paper
        style={{
          padding: 10,
          height: '100%',
        }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography
            variant="h6"
            style={{
              paddingLeft: 10,
            }}></Typography>
        </div>
        <CardContent>
          <Fade bottom duration={1000}>
            <Typography variant="h6">{title}</Typography>
            <Typography component="p">{description}</Typography>
            <div style={{ position: 'absolute', bottom: 5 }}>
              <Link
                to={`/stream/watch/${id}`}
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
            </div>
          </Fade>
        </CardContent>
      </Paper>
    </Grid>
  );
});

export default StreamTile;
