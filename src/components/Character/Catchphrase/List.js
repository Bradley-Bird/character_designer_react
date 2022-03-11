import React from 'react';

export default function List({ catchphraseArray, catchphrase }) {
  return (
    <div>
      <ul id="catchphrases">
        {catchphraseArray.map((catchphrase, idx) => (
          <li key={idx}>{catchphrase}</li>
        ))}
      </ul>
    </div>
  );
}
