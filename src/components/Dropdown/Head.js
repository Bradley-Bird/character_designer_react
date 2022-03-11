import React from 'react';

export default function Head({ setHead }) {
  return (
    <div className="picker">
      <label>
        Head
        <select id="head-dropdown" onChange={(e) => setHead(e.target.value)}>
          <option value="bird">Bird</option>
          <option value="duck">Duck</option>
          <option value="dog">Dog</option>
          <option value="horse">Horse</option>
        </select>
      </label>
    </div>
  );
}
