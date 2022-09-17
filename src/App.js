import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;