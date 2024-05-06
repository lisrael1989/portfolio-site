import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/main.scss'

import { AppHeader } from './cmps/AppHeader.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'

export function App() {

  return (


    <Router>
      <section>
        <AppHeader />
        <main className='main-layout'>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutUs />} path="/about" />
          </Routes>


        </main>

      </section>
    </Router>


  )
}


