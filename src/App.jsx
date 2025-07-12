import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Body from './components/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NameCard from './components/NameCard';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Body />}>
                {<Route path='/home' element={<NameCard />}></Route>}
                <Route path='/about' element={<About />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
