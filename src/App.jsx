import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Body from './components/Body'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NameCard from './components/NameCard';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import ProfileSummary from './components/pages/ProfileSummary';
import Education from './components/pages/Education';
import Experience from './components/pages/Experience';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path='/' element={<Body />}>
                <Route path='/home' element={<NameCard />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/profileSummary' element={<ProfileSummary />}></Route>
                <Route path='/education' element={<Education />}></Route>
                <Route path='/experience' element={<Experience />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
