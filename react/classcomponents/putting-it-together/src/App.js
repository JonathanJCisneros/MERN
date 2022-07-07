import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Kevin" lastName="Bacon" age={22} hairColor="Black"/>
      <PersonCard firstName="Jane" lastName="Doe" age={41} hairColor="Blonde"/>
    </div>
  );
}

export default App;
