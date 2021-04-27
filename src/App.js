import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './component/User/User';

function App() {
  const [familiar, setFamiliar] = useState(false);

  return (
    <div className='simple-style'>
      <h3>Is Familiar: {familiar.toString()} </h3>
      <button onClick={()=>setFamiliar(!familiar)}>Toggle Friend</button>
      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
