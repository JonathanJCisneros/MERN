import './App.css';
import {Routes, Route} from 'react-router-dom'
import ManagePlayers from './views/ManagePlayers';
import AddPlayer from './views/AddPlayer';
import PlayerStatus from './views/PlayerStatus';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/players/list'} element={<ManagePlayers/>}/> 
        <Route path={'/players/addplayer'} element={<AddPlayer/>}/>
        <Route path={'/status/game/1'} element={<PlayerStatus/>}/>
      </Routes>
    </div>
  );
}

export default App;
