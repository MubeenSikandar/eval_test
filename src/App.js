import React, {useEffect} from 'react'
import Header from './Components/Header'
import Home from './Components/Home/Home';
import {
  Route,
  Routes,
} from "react-router-dom";
import Auth from './Components/Auth/Auth';

const App = () => {

  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Home" element={<Home />} />
          </Routes>
      </div>
  )
}

export default App