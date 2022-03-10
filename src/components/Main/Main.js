import React, { useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import Character from '../Character/Character';

export default function Main() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('blue');

  return (
    <main>
      <Character {...{ head, middle, bottom }} />
      <Dropdown {...{ setHead, setMiddle, setBottom }} />
    </main>
  );
}
