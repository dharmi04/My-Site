import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import React from 'react'
import Contact from './components/Contact'
import Home from './components/Home'
import Home1 from './components/Home1'
import MyWorks from './components/MyWorks'
import Skills from './components/Skills'

function App() {

  return (
    <div className="bg-black">
     {/* <Home1 />
     <Home />
     <MyWorks />
     <Skills />
     <Contact /> */}
      <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<Home />} />
          {/* <Route path="/myworks" element={<MyWorks />} /> */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          
    
      </Routes>
    
    </Router>

    </div>
  )
}

export default App
