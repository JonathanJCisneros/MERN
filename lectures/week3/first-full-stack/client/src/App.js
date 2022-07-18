import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Create from './views/Create';
import Details from './views/Details';
import Update from './views/Update';
import Test from './views/Test';

function App() {
  return (
    <div className="App">
      <h1>Songs Demo</h1>
      <p>
        <Link to="/dashboard">Dashboard</Link>   |   <Link to="/songs/new">Create New Song</Link>   |   <Link to="/test">Test</Link>
      </p>
      <Routes>
        <Route path="/test" element={<Test/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/songs/new" element={<Create/>}/>
        <Route path="/songs/:_id" element={<Details/>}/>
        <Route path="/songs/:_id/edit" element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
