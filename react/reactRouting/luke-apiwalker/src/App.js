import './App.css';
import {Route, Routes} from 'react-router-dom'
import Form from './components/Form';
import People from './views/People';
import Planets from './views/Planets';
import Starships from './views/Starships';




function App() {
  return (
    <div className="App">
      <h1>Luke APIwalker</h1>
      <Form/>
        <Routes>
          <Route path={"/people/:id"} element={<People/>}/>
          <Route path={"/planets/:id"} element={<Planets/>}/>
          <Route path={"/starships/:id"} element={<Starships/>}/>
        </Routes>
    </div>
  );
}

export default App;
