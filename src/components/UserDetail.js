import React from 'react';
import faker from 'faker';


const UserDetail = (props) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="https://www.google.com" className="author">{`${props.author} ${faker.name.lastName()}`}</a>
          <div className="metadata">
            <span>{new Date().toLocaleString()}</span>
          </div>
          <div className="text">{faker.lorem.sentence()}</div>
        </div>
      </div>
    </div>
  );
}


export default UserDetail;