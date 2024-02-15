import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'


const App = () => {
  return (
    <Routes>

    <Route path='/' element={<Login/>}></Route>
    <Route path='/browse' element={<Browse/>}></Route>

    </Routes>
  )
}

export default App