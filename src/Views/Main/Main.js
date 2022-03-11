import React, { useState } from 'react';

import Dropdown from '../../components/Dropdown/Dropdown';
import Character from '../../components/Character/Character';

export default function Main() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');
  const [catchphrase, setCatchphrase] = useState('hello');
  const [catchphraseArray, setCatchphraseArray] = useState([]);
  return (
    <main>
      <Character {...{ head, middle, bottom }} />
      <Dropdown
        {...{
          setHead,
          setMiddle,
          setBottom,
          catchphrase,
          setCatchphrase,
          catchphraseArray,
          setCatchphraseArray,
        }}
      />
    </main>
  );
}
