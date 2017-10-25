import React from 'react'

const MainLayout = ({ children, location }) => {
  return (
    <div className="app-main">
      <header><h1>WELCOME</h1></header>
      <main className="main">
          { children }
      </main>
      <footer><h2>GOODBYE</h2></footer>
    </div>
  )
}

export default MainLayout
