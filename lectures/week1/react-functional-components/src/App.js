import PropsComponent from './components/PropsComponent';
import StateComponent from './components/StateComponent';
import './App.css';
import FunctionalPropsComponent from './components/FunctionalPropsComponent';
import FunctionalStateComponent from './components/FunctionalStateComponent';

function App() {
  return (
    <div className="App">
      <FunctionalStateComponent/>
      <FunctionalPropsComponent title="Example" episodes={10} isRecommended={true} hashtags={["Nice", "Boring"]}/>
      <StateComponent/>
      <PropsComponent title="Stranger things" episodes={30} isRecommended={true} hashtags={["Horror", "Action"]}/>
      <PropsComponent title="Obi-Wan Kenobi" episodes={6} isRecommended={true} hashtags={["Action", "Sci-Fi"]}/>
      <PropsComponent title="Lucifer" episodes={76} isRecommended={true} hashtags={["Action", "Sci-Fi"]}/>
    </div>
  );
}

export default App;
