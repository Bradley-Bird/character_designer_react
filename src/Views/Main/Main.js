import React, { useState } from 'react';

import Character from '../../components/Character/Character';
import Head from '../../components/Dropdown/Head';
import Middle from '../../components/Dropdown/Middle';
import Bottom from '../../components/Dropdown/Bottom';
import Form from '../../Catchphrase/Form';
import List from '../../Catchphrase/List';

export default function Main() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');
  const [catchphrase, setCatchphrase] = useState('hello');
  const [catchphraseArray, setCatchphraseArray] = useState([]);
  return (
    <main>
      <Character {...{ head, middle, bottom }} />
      <div className="left">
        <div className="picker">
          <Head {...{ setHead }} />
          <Middle {...{ setMiddle }} />
          <Bottom {...{ setBottom }} />
        </div>
        <Form {...{ catchphrase, setCatchphrase, setCatchphraseArray }} />
        <List {...{ catchphrase, catchphraseArray }} />
      </div>
    </main>
  );
}
