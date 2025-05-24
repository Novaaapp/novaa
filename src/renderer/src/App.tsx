/* eslint-disable prettier/prettier */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Chat from './pages/ChatPage'
import { Settings } from './pages/Settings'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
