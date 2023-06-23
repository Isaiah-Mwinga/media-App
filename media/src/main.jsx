import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import Profile from './pages/profile/Profile.jsx'
import Home from './pages/home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Login />
    <Register />
    <Profile />
  </React.StrictMode>,
)
