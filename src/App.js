import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ErrorPage from './Components/ErrorPage'
import Birth from './Components/Birth'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Birth />}/>
        <Route exact path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

