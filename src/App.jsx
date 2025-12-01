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
import Projects from './components/pages/Projects';
import Certifications from './components/pages/Certifications';
import Skills from './components/pages/Skills';
import Achievements from './components/pages/Achievements';
import Hobbies from './components/pages/Hobbies';

function App() {
  const [count, setCount] = useState(0)
  const basename = "/Portfolio";
  return (
    <>
      <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path='/' element={<Body />}>
                <Route path='/home' element={<NameCard />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/profileSummary' element={<ProfileSummary />}></Route>
                <Route path='/education' element={<Education />}></Route>
                <Route path='/experience' element={<Experience />}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/certifications' element={<Certifications/>}></Route>
                <Route path='/skills' element={<Skills/>}></Route>
                <Route path='/achivements' element={<Achievements/>}></Route>
                <Route path='/hobbies' element={<Hobbies/>}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
