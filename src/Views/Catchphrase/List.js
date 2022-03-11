import React from 'react';

export default function List({ catchphraseArray }) {
  return (
    <div>
      <ul id="catchphrases">
        {catchphraseArray.map((catchphrase) => (
          <li key={catchphrase}>{catchphrase}</li>
        ))}
      </ul>
    </div>
  );
}
