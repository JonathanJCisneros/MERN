import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Update from './views/Update';
import NewAuthor from './views/NewAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Dashboard/>}/>
        <Route path={'/edit/:_id'} element={<Update/>}/>
        <Route path={'/new'} element={<NewAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
