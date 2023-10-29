import './App.css'
import Navbar from './components/Navbar'
import CourseCleverse from './pages/CourseCleverse'
import CourseReactHandOn from './pages/CourseReactHandOn'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/cleverse" element={<CourseCleverse />} />
        <Route path="/course/react-hands-on" element={<CourseReactHandOn />} />
      </Routes>
    </div>
  )
}

export default App
