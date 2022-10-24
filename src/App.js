import './App.css';
import { useState, useEffect } from 'react'
import PlanetCycles from './components/PlanetCycles'
import Arbitration from './components/Arbitration'
import VoidFissures from './components/VoidFissures';
import Nightwave from './components/Nightwave'
import ArchonHunt from './components/ArchonHunt'



function App() {

  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    const apiUrl = 'https://api.warframestat.us/pc'
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, [])

  function handleLog() {
    console.log(apiData)
  }

  return (
    <div className="App">
      <h1>Warframe Worldstate Monitor</h1>
      <p>Current time: </p>
      {apiData && <PlanetCycles data={apiData} />}
      {apiData && <Arbitration data={apiData} />}
      {apiData && <VoidFissures data={apiData} />}
      {apiData && <Nightwave data={apiData} />}
      {apiData && <ArchonHunt data={apiData} />}
      <button onClick={handleLog}>Logger</button>
    </div>
  );
}

export default App;
