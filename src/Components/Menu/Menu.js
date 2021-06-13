import React from 'react'


//component
class Menu extends React.Component {
    render() {
      return (
        <div>
          <h1>ahoj</h1>
          <Menu />
          <MainContent />
        </div>
      )
    }
  }

  
export default Menu;