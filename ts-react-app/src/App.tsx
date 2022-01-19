import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AboutPage } from './pages/AboutPage'
import { TodosPage } from './pages/TodosPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path={'/'} element={<TodosPage />}></Route>
          <Route path={'/about'} element={<AboutPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
