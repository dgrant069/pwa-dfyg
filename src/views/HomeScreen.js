import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Service Workers in React?</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to='/alt'>alt</Link>
    </div>
  )
}

export default Home
