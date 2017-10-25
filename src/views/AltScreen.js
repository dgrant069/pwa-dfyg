import React from 'react';
import { Link } from 'react-router-dom'

const AltScreen = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Did this route properly?</h1>
      </header>
      <Link to='/'>Home</Link>
      <Link to='/test'>Test</Link>
    </div>
  )
}

export default AltScreen
