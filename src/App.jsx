// Import child components of the BrowserRouter import you wrap your app in
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Pokemon from './pages/Pokemon'
import Resume from './pages/Resume'
import Success from './pages/Success'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
