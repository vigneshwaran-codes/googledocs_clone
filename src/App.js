import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextEditor from './components/TextEditor'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/new-document'>
          <Redirect to={`/documents/${uuidv4()}`} />
        </Route>
        <Route exact path='/documents/:id'>
          <TextEditor />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
