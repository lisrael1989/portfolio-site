import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/main.scss'

import { AppHeader } from './cmps/AppHeader.jsx'
import { HomePage } from './pages/HomePage.jsx'

export function App() {

  return (


    <Router>
      <section>
        <AppHeader />
        <main className='main-layout'>
          <Routes>
            <Route element={<HomePage />} path="/" />
          </Routes>


        </main>

      </section>
    </Router>


  )
}


