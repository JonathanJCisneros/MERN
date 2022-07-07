import './App.css';
import MixComponent from './components/MixComponent';
import PropsComponent from './components/PropsComponent';
import StateComponent from './components/StateComponent';


function App() {
  return (
    <div className="App">
      <h1>TV Shows</h1>
      <MixComponent likes = {200}/>
      <StateComponent/>
      <PropsComponent title="Stranger things" episodes={30} isRecommended={true} hashtags={["Horror", "Action"]}/>
      <PropsComponent title="Obi-Wan Kenobi" episodes={6} isRecommended={true} hashtags={["Action", "Sci-Fi"]}/>
      <PropsComponent title="Lucifer" episodes={76} isRecommended={true} hashtags={["Action", "Sci-Fi"]}/>
    </div>
  );
}

export default App;

// pass info from parents to child: PROPS
