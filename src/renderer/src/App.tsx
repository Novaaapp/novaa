/* eslint-disable prettier/prettier */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Chat from './pages/ChatPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App
