import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import StateWiseDetails from './components/StateWiseDetails'
import Vaccination from './components/Vaccination'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/state/:stateCode" component={StateWiseDetails} />
    <Route exact path="/vaccination" component={Vaccination} />
    <Route component={NotFound} />
  </Switch>
)

export default App
