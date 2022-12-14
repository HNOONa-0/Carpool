import './App.css';

import React, { useState } from 'react';
import Header from './Header/Header';
import LogModal from './LogModal/LogModal';

function App() {
  const [isMod,setIsMod]=useState(false);
  return (
    <>
      <Header
        isMod={isMod}
        setIsMod={setIsMod}
      />
      <LogModal
        isMod={isMod}
        setIsMod={setIsMod}
      />
    </>
  );
}

export default App;

