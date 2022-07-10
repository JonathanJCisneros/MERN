import './App.css';
import {useState} from 'react'
import AddColor from './components/AddColor'
import Display from './components/Display';

function App() {
  const [currentList, setCurrentList] = useState([])

  const addBox = (newBox) => setCurrentList([...currentList, newBox]);

  return (
    <div className="App">
      <fieldset>
        <legend>App.jsx</legend>
        <AddColor newBox={addBox}/>
        <Display boxList={currentList}/>
      </fieldset>
    </div>
  );
}

export default App;
