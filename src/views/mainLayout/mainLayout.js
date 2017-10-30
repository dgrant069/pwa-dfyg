import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

const MainLayout = ({ children }) => {
  return (
    <div className="app-main">
      <Header />
      <main className="main">
          { children }
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
