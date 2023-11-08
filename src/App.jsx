// Import child components of the BrowserRouter import you wrap your app in
import { Routes, Route } from 'react-router-dom'

import Header from './components/header'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <Header />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
