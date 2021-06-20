import React, {useEffect,useState} from 'react';
import './App.css';
import { Login } from "./components";
import { getTokenFromUrl } from './spotify';


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log(`I Have a token`, token);
  }, []);

  return <div>{token ? <h1>I'm logged in</h1> : <Login />}</div>;
}

export default App;
