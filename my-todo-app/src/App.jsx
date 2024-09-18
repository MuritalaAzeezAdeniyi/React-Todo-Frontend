import { useState, useRoutes } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './components/topNav'
import image from './assets/task.jpg'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import AddTask from './components/addTask'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ROUTES from './router/router'
// import Landingpage from './components/Landingpage'

// const router = createBrowserRouter([
//   ...ROUTES,
// ])


function App() {
  
  return (
      <Router>
        <Routes>
        {ROUTES.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
        </Routes>
      </Router>
  )
}
export default App
