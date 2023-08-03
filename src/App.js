import logo from './logo.svg';
import './App.css';
import MyCard from './components/card.component';
import MyTextField from './components/textfield.component';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import { countState } from './store/atoms';

function App() {

  return (
    <RecoilRoot>
      <div className="App" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly"}}>
        <MyCard />
        <MyTextField />
      </div>
    </RecoilRoot>
  );
}

export default App;
