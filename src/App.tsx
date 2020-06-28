import React from 'react'
import { GlobalStyles } from './globalStyles'
import configureStore from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllTodos from './pages/AllTodos'
import ActiveTodos from './pages/ActiveTodos'
import CompletedTodos from './pages/CompletedTodos'

function App() {
  const store = configureStore()

  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path="/" exact component={AllTodos} />
            <Route path="/active" component={ActiveTodos} />
            <Route path="/completed" component={CompletedTodos} />
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
