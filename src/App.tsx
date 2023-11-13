import './App.css'
import Navbar from './components/Navbar'
import CourseCleverse from './pages/CourseCleverse'
import CourseReactHandOn from './pages/CourseReactHandOn'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './providers/AuthProvider'
import GuardedRoute from './guard/GuardedRoute'
import Login from './pages/Login'
import Profile from './pages/Profile'
import TestPage from './pages/testPage'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testPage" element={<TestPage />} />
        <Route path="/course/react-hands-on" element={<CourseReactHandOn />} />

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/course/cleverse" element={<CourseCleverse />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
