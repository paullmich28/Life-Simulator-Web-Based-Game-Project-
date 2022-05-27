import './App.css';
import LoginPage from './components/LoginPage';
import LoadingScreen from './components/LoadingScreen';
import GamePage from './components/GamePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/loading' element={<LoadingScreen />} />
        <Route path='/gamepage' element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
