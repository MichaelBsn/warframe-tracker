import './App.css';
import { useState, useEffect } from 'react'
import VoidFissures from './components/VoidFissures';
import Nightwave from './components/Nightwave'
import QuickInfo from './components/QuickInfo';



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
      {apiData && <QuickInfo data={apiData} />}
      {apiData && <VoidFissures data={apiData} />}
      {apiData && <Nightwave data={apiData} />}
      <button onClick={handleLog}>Logger</button>
    </div>
  );
}

export default App;
