import './App.css';
import {Routes, Route} from 'react-router-dom'
import ManagePlayers from './views/ManagePlayers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/players/list'} element={<ManagePlayers/>}/> 
      </Routes>
    </div>
  );
}

export default App;
