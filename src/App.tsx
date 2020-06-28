import React from 'react'
import Todos from './components/Todos/Todos'
import { GlobalStyles } from './globalStyles'
import configureStore from './store'
import { Provider } from 'react-redux'

function App() {
  const store = configureStore()

  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyles />
        <Todos />
      </Provider>
    </div>
  )
}

export default App
