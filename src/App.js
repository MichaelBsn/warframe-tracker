import './App.css';
import { useState, useEffect } from 'react'
import VoidFissures from './components/VoidFissures';
import Nightwave from './components/Nightwave'
import QuickInfo from './components/QuickInfo';
import { Link, Route, Routes } from "react-router-dom"



function App() {

  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    const apiUrl = 'https://api.warframestat.us/pc'
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, [])

  return (
    <div className="App">
      <h1>Warframe Worldstate Monitor</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/fissures">Void Fissures</Link>
        <Link to="/nightwave">Nightwave</Link>
      </nav>
      <Routes>
        <Route path='/' element={apiData && <QuickInfo data={apiData} />} />
        <Route path='/fissures' element={apiData && <VoidFissures data={apiData} />} />
        <Route path='/nightwave' element={apiData && <Nightwave data={apiData} />} />
      </Routes>
    </div>
  );
}

export default App;
