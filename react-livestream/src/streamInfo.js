import React, { useState, useEffect } from 'react';
import Nav from './Home/Hero/nav';

import db from './api/firebase';
import Sender from './Sender';
import StreamTile from './streamTile';

function Streams() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    db.collection('streams')
      .orderBy('id', 'desc')
      .onSnapshot(snapshot => setStreams(snapshot.docs.map(doc => doc.data())));
  }, []);

  return (
    <div className="i">
      {streams.map(streams => (
        <StreamTile
          title={streams.title}
          description={streams.description}
          id={streams.id}
        />
      ))}
    </div>
  );
}

export default Streams;
