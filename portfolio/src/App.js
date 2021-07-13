import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/projects" component={ Projects }/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
