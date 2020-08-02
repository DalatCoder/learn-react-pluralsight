import React from 'react';

const Card = props => {
  return (
    <div className="item">
      <div className="ui tiny image">
        <img src={props.avatar_url} alt={`Avatar of ${props.avatar_url}`} />
      </div>
      <div className="content">
        <h3 href="/" className="header">
          {props.name}
        </h3>
        <div className="description">
          <p>{props.company || 'unknown company'}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
