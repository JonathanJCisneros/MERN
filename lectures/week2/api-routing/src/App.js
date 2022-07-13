import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import ErrorPage from './views/ErrorPage';
import Country from './views/Country';
import Keyword from './views/Keyword';
import DisplayOnLoad from './views/DisplayOnLoad';

const Home = () => {
  return (
    <fieldset>
      <legend>Home.jsx</legend>
    </fieldset>
  )
}

const About = () => {
  return (
    <fieldset>
      <legend>About.jsx</legend>
    </fieldset>
  )
}

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>Routing Demo</h1>
      <p>
        <Link to="/home">Home</Link>
        <span>  |  </span>
        <Link to="/about">About</Link>
        <span>  |  </span>
        <Link to="/japan">Japan</Link>
        <span>  |  </span>
        <Link to="/whatever/blue">Whatever</Link>
        <span>  |  </span>
        <Link to="/pokemon/snorlax">Snorlax</Link>
        <span>  |  </span>
        <Link to="/pokemon/pikachu">Pikachu</Link>
        <span>  |  </span> 
        <a href='http://www.google.com' target="_blank">Google</a>
      </p>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/:country' element={<Country/>}/>
        <Route path='/:keyword/:color' element={<Keyword/>}/>
        <Route path="/pokemon/:pokemonName" element={<DisplayOnLoad/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </fieldset>
  );
}

export default App;
