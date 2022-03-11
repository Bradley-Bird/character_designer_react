import React, { useRef } from 'react';

export default function Form({ catchphrase, setCatchphrase, setCatchphraseArray }) {
  const inputRef = useRef();
  const saveCatchphrase = (e) => {
    e.preventDefault();
    setCatchphraseArray((prevState) => [...prevState, catchphrase]);

    setCatchphrase('');
    inputRef.current.value = '';
  };
  return (
    <form>
      <label>
        Add a catchphrase
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
  );
}
