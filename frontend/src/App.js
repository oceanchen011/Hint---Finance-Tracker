import './App.css';
import LoginSignup from './Components/Login/LoginSignup';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/LoginSignup' element={<LoginSignup/>}></Route>
        <Route path='/HomeScreen' element={<HomeScreen/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
