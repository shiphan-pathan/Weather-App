import { useEffect, useState, type JSX } from 'react'
import './App.css'
import WeatherPage from './pages/weather/WeatherPage'
import { getCookies } from './api/auth.api'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const checkAuth = async () => {
    try {
      const response = await getCookies()
      setIsAuthenticated(response.authenticated)
    } catch  {
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {

    if (loading) {
      return <div>Loading...</div>
    }

    if (!isAuthenticated) {
      return <Navigate to="/" />
    }
    return children
  } 
 

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/weather" element={
          <ProtectedRoute>
            <WeatherPage />
          </ProtectedRoute>
        } />
      </Routes>


  )
}

export default App
