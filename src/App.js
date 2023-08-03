import logo from './logo.svg';
import './App.css';
import MyCard from './components/card.component';
import MyTextField from './components/textfield.component';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';


function App() {

  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <div className="App" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly"}}>
        <MyCard count={count} setCount={setCount}/>
        <MyTextField count={count}/>
      </div>
    </RecoilRoot>
  );
}

export default App;
