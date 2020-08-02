import React from 'react';

const StarsDisplay = props => {
  return (
    <React.Fragment>
      {Array(props.count)
        .fill(null)
        .map(starId => (
          <div key={starId} className="star"></div>
        ))}
    </React.Fragment>
  );
};

export default StarsDisplay;
