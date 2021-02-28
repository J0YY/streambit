import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';
// pages
import StreamList from './pages/streams/StreamList';
import StreamCreate from './pages/streams/StreamCreate';
import StreameEdit from './pages/streams/StreamEdit';
import StreamWatch from './pages/streams/StreamWatch';
import Home from './Home';
import Messaging from './Messaging';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/streams">
          <StreamList />
        </Route>
        <Route exact path="/stream/new">
          <StreamCreate />
        </Route>
        <Route path="/stream/edit/:id" component={StreameEdit} />
        <Route path="/stream/watch/:id" component={StreamWatch} />
        <Route path="/messaging">
          <Messaging />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
