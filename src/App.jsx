import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './global.css'

import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import TitlePage from './Pages/TitlePage'
import NotFoundPage from './Pages/NotFoundPage'


function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false
  )

  return (
    <div className={`App ${darkMode && "dark"}`}>
    <Router>
      <div className="bg-light-800 dark:bg-dark-600 h-screen overflow-x-hidden">
        <Navbar 
          darkMode={darkMode}
          setDarkMode={setDarkMode} 
          brand="🇻‌🇻‌🇹‌🇻‌-🇻‌🇦‌🇷‌🇮‌🇦‌🇧‌🇱‌🇪‌-🇻‌🇮‌🇰‌🇮‌🇳‌🇬‌🇸‌-🇹‌🇻‌" 
        />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/title/:type/:id">
            <TitlePage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App