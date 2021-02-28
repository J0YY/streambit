import React, { useState } from 'react';
import './Sender.css';
import { Avatar, Button } from '@material-ui/core';
import db from './api/firebase';
import firebase from 'firebase';

function TweetBox() {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');

  const send = e => {
    e.preventDefault();

    if (message.trim() != '') {
      db.collection('messages').add({
        displayName: 'Anonymous',
        text: message,
        image: image,
        avatar:
          'https://lh3.googleusercontent.com/proxy/NxqKAPWKY_4nNs6l-AxbkcwfcUBJ9snKle82MiaJG3PBSNf2xODW-VUlbCQFsfxn_YhPTIfUgMer7zJybfel79RuFWemWos-sU6-7QY5HwVmwr9lTlPSlAdwvQ',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setMessage('');
      setImage('');
    }
  };

  return (
    <div className="sender">
      <form>
        <div className="sender__input">
          <Avatar src="https://lh3.googleusercontent.com/proxy/NxqKAPWKY_4nNs6l-AxbkcwfcUBJ9snKle82MiaJG3PBSNf2xODW-VUlbCQFsfxn_YhPTIfUgMer7zJybfel79RuFWemWos-sU6-7QY5HwVmwr9lTlPSlAdwvQ" />
          <input
            onChange={e => setMessage(e.target.value)}
            value={message}
            placeholder={`Anonymous chat! Feel free to share whatever's on your mind, critique or questions are welcome too :)`}
            type="text"
          />
        </div>
        <input
          value={image}
          onChange={e => setImage(e.target.value)}
          className="sender__imageInput"
          placeholder="Optional image URL for accompanying image or gif"
          type="text"
        />

        <Button onClick={send} type="submit" className="sender__button">
          Send
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
