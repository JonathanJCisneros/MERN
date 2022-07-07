import './App.css';

import PersonCard from './components/personCard';



function App() {
  return (
    <div className="App">
      <PersonCard firstName="Joe" lastName="Herald" age={48} hairColor="Black"/>
      <PersonCard firstName="Kevin" lastName="Bacon" age={22} hairColor="Red"/>
      <PersonCard firstName="Martha" lastName="Stewart" age={32} hairColor="Green"/>
      <PersonCard firstName="Amber" lastName="Heard" age={45} hairColor="Poop Brown"/>
    </div>
  );
}

export default App;
