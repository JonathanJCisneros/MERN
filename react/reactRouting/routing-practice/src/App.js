import './App.css';
import {Routes, Route, useParams} from "react-router-dom";

const Home = () => { 
  return (
    <h1>Welcome</h1>
  );
}

const Data = () => { 
  const {data} = useParams();
  return (
    <div>
      {isNaN(+data)? <h1>The word is: {data}</h1>: <h1>The number is: {data}</h1>}
    </div>
  );
}

const Custom = () => { 
  const {word, color1, color2} = useParams();
  return (
    <div style={{backgroundColor: color2}}>
      <h1 style={{color: color1}}>The word is: {word}</h1>
    </div>
  );
}



function App() {
  return (
    <fieldset>
      <legend>Testing.jsx</legend>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:data" element={<Data/>}/>
        <Route path="/:word/:color1/:color2" element={<Custom/>}/>
      </Routes>
    </fieldset>
  );
}

export default App;
