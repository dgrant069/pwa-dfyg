import React from 'react';
import { Link } from 'react-router-dom'

const TestScreen = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">THIS IS A TEST</h1>
      </header>
      <Link to='/alt'>alt</Link>
    </div>
  )
}

export default TestScreen
