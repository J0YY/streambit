import React, { useState, useEffect } from 'react';
import Nav from './Home/Hero/nav';
import './Messaging.css';
import db from './api/firebase';
import Message from './Message';
import Sender from './Sender';

function Messaging() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        setMessages(snapshot.docs.map(doc => doc.data()))
      );
  }, []);

  return (
    <div className="messaging">
      <Nav />
      <Sender />
      {messages.map(message => (
        <Message
          displayName={message.displayName}
          text={message.text}
          avatar="https://lh3.googleusercontent.com/proxy/NxqKAPWKY_4nNs6l-AxbkcwfcUBJ9snKle82MiaJG3PBSNf2xODW-VUlbCQFsfxn_YhPTIfUgMer7zJybfel79RuFWemWos-sU6-7QY5HwVmwr9lTlPSlAdwvQ"
          image={message.image}
          timestamp={new Date(message.timestamp?.toDate()).toUTCString()}
        />
      ))}
    </div>
  );
}

export default Messaging;
