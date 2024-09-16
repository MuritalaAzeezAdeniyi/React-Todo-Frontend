import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import TopNav from './components/topNav.jsx'
import AddTask from './components/addTask.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
