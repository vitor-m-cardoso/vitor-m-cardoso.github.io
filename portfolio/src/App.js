import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/projects" component={ Projects }/>
      </Switch>
    </>
  );
}

export default App;
