import React from 'react';
import faker from 'faker';

const CommentDatails = () =>{
    return(
    <div className="comment">
    <a className="avatar">
      <img src={faker.image.avatar()} alt="avatar"/>
    </a>
    <div className="content">
      <a className="author">Joe Henderson</a>
      <div className="metadata">
        <span className="date">5 days ago</span>
      </div>
      <div className="text">
        Dude, this is awesome. Thanks so much
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>)
}

export default CommentDatails;