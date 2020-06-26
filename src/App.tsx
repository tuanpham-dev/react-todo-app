import React from 'react'
import Todos from './components/Todos/Todos'
import { GlobalStyles } from './globalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Todos />
    </div>
  )
}

export default App
