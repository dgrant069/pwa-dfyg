import React from 'react';

const Main = ({ children, location }) => {
  return (
    <div className="main">
      <main className={styles.main}>
          { children }
      </main>
    </div>
  )
};

export default Main;
