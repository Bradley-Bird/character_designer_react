import React, { useRef } from 'react';

export default function Dropdown({
  setHead,
  setMiddle,
  setBottom,
  catchphrase,
  setCatchphrase,
  catchphraseArray,
  setCatchphraseArray,
}) {
  const inputRef = useRef();
  const saveCatchphrase = (e) => {
    e.preventDefault();
    setCatchphraseArray((prevState) => [...prevState, catchphrase]);

    setCatchphrase('');
    // inputRef.target.textContent = '';
  };
  return (
    <div className="left">
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
        <label>
          Middle
          <select id="middle-dropdown" onChange={(e) => setMiddle(e.target.value)}>
            <option value="blue">Blue</option>
            <option value="dress">Fancy</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
          </select>
        </label>
        <label>
          Bottom
          <select id="bottom-dropdown" onChange={(e) => setBottom(e.target.value)}>
            <option value="leg">Single Leg</option>
            <option value="white">White Pants</option>
            <option value="blue">Blue Jeans</option>
          </select>
        </label>
        <form>
          <label>
            Add a catch phrase
            <input
              id="catchphrase-input"
              ref={inputRef}
              onChange={(e) => setCatchphrase(e.target.value)}
            />
            <button id="catchphrase-button" onClick={saveCatchphrase}>
              Add
            </button>
            <button id="reset-button" onClick={() => (setCatchphraseArray = [])}>
              reset
            </button>
          </label>
        </form>
      </div>
      <div id="stats">
        <p id="report"></p>
        <div>
          <ul id="catchphrases">
            {catchphraseArray.map((catchphrase, idx) => (
              <li key={idx}>{catchphrase}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
