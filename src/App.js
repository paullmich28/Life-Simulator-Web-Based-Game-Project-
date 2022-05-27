import './App.css';
import LoginPage from './components/LoginPage';
import GamePage from './components/GamePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/gamepage' element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
