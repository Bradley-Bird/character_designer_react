import React, { useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import Character from '../Character/Character';

export default function Main() {
  const [head, setHead] = useState();
  const [middle, setMiddle] = useState();
  const [bottom, setBottom] = useState();

  return (
    <main>
      <Character {...{ head, middle, bottom }} />
      <Dropdown {...{ setHead, setMiddle, setBottom }} />
    </main>
  );
}
