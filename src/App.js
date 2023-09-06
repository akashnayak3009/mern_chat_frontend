import React from 'react'
import './App.css';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage'
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/chats' element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App