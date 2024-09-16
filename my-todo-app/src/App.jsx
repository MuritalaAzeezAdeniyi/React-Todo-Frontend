import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './components/topNav'
import image from './assets/task.jpg'
import SignUp from './components/SignUp'
import React from 'react'
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
    <div>
    <TopNav/>
      {/* <SignUp/> */}
       {/* <RouterProvider>router={router}</RouterProvider>  */}
    {/* <AddTask/> */}
    </div>
  )
}
export default App
