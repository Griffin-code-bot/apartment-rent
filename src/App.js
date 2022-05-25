import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Main from './Main'
import Location from './Location'






  
function App(){
  return (

    <div>
      <Login />
      <br />
      <Navbar />
      <br />
      Apartment Rental
      <Main />
      <Location />
     </div>
  )
}

export default App