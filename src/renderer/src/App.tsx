import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Chat from './pages/ChatPage';
import Hello from './pages/HelloPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;