import React, {useEffect} from 'react';
import './App.css';
import { Login } from "./components";
import { getTokenFromUrl } from './spotify';


function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
