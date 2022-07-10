import './App.css';
import {useState} from 'react'
import AddColor from './components/AddColor'
import Display from './components/Display';

function App() {
  const [currentColor, setCurrentColor] = useState("Add a color")

  const changeColor = (newColor) => setCurrentColor(newColor);

  return (
    <div className="App">
      <fieldset>
        <legend>App.jsx</legend>
        <AddColor newColor={changeColor}/>
        <Display color={currentColor}/>
      </fieldset>
    </div>
  );
}

export default App;
