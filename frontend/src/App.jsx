import React from 'react'
import {Routes,Route} from 'react-router'
import Welcome from './components/Welcome'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={  <Welcome/>}/>
      <Route path='/login' element={  <Login/>}/>
      <Route path='/signup' element={  <Signup/>}/>
    </Routes>
  
    </>
  )
}

export default App