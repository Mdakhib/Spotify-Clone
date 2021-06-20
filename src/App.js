import React, {useEffect} from 'react';
import './App.css';
import { Login } from "./components";
import { getTokenFromUrl } from './spotify';


function App() {

  const [token,setToken]

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const token = hash.access_token;
    console.log(`I Have a token` ,token);
  },[])


  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
