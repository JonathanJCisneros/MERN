import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './views/Dashboard';
import Details from './views/Details';
import EditJob from './views/EditJob';
import NewJob from './views/NewJob';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Dashboard/>} />
        <Route path={'/jobs/:_id'} element={<Details/>} />
        <Route path={'/jobs/new'} element={<NewJob/>} />
        <Route path={'/jobs/edit/:_id'} element={<EditJob/>} />
      </Routes>
    </div>
  );
}

export default App;
