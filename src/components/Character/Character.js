import React from 'react';

export default function Character({ head, middle, bottom }) {
  return (
    <div className="right">
      <div className="character">
        <div className="bg head" id="head">
          <img
            style={{ height: '200px' }}
            src={`${process.env.PUBLIC_URL}/assets/${head}-head.png`}
          />
        </div>
        <div className="bg middle" id="middle">
          <img
            style={{ height: '200px' }}
            src={`${process.env.PUBLIC_URL}/assets/${middle}-middle.png`}
          />
        </div>
        <div className="bg bottom" id="bottom">
          <img
            style={{ height: '200px' }}
            src={`${process.env.PUBLIC_URL}/assets/${bottom}-pants.png`}
          />
        </div>
      </div>
    </div>
  );
}
