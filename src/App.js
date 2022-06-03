import './App.css';
import LoginPage from './components/LoginPage';
import LoadingScreen from './components/LoadingScreen';
import GamePage from './components/GamePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kampus from './components/Kampus';
import Kafe from './components/Kafe';
import Mall from './components/Mall';
import Ending from './components/Ending';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/loading' element={<LoadingScreen />} />
        <Route path='/gamepage' element={<GamePage />} />
        <Route path='/kampus' element={<Kampus />} />
        <Route path='/kafe' element={<Kafe />} />
        <Route path='/mall' element={<Mall />} />
        <Route path='/ending' element={<Ending />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
