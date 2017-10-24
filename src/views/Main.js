import React from 'react'

const Main = ({ children, location }) => {
  return (
    <div className="app-main">
      <main className="main">
          { children }
      </main>
    </div>
  )
}

export default Main
