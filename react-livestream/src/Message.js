import React, { forwardRef } from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';

const Message = forwardRef(
  ({ displayName, text, image, avatar, timestamp }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{' '}
                <span className="timestamp">
                  <p>{timestamp}</p>
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
);

export default Message;
