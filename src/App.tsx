import React from 'react'
import { GlobalStyles } from './globalStyles'
import configureStore from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllTodos from './pages/AllTodos'
import ActiveTodos from './pages/ActiveTodos'
import CompletedTodos from './pages/CompletedTodos'
import { throttle } from 'lodash'
import { saveState, loadState } from './utils/localStorage'
import { AppState } from './store/types'

function App() {
  const initialState: AppState = loadState()
  const store = configureStore(initialState)

  store.subscribe(
    throttle(() => {
      saveState(store.getState())
    }, 1000)
  )

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
