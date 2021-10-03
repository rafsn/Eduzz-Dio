import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

function sum(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="teste">
      Rafael Santos - Aulas React
      <h1>Soma: {sum(10, 20)}</h1>
    </div>
  )
}

const App = () => {
  return <div className="App">{primeiroJSX()}</div>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
